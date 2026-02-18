import React, { useState } from 'react';
import { Button } from './ui/button';
import { AppointmentDatePicker } from './ui/appointment-calendar';

import { Reveal } from './ui/reveal';
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';

const PRODUCTS = [
    { id: 'ride-1', type: 'Ride', name: 'Farmland Tour', price: 3500, image: '/images/experiences/farmland-tour.png', unit: 'person' },
    { id: 'ride-2', type: 'Ride', name: 'Wildwood Safari', price: 4000, image: '/images/experiences/wildwood-safari.png', unit: 'person' },
    { id: 'ride-3', type: 'Ride', name: 'Summit Ride', price: 4500, image: '/images/experiences/summit-ride.png', unit: 'person' },
    { id: 'stay-1', type: 'Stay', name: 'Rustic Tent', price: 1300, image: '/images/gallery/gallery-4.png', unit: 'person' },
    { id: 'stay-2', type: 'Stay', name: 'Cozy Dorm', price: 1800, image: '/images/gallery/gallery-7.png', unit: 'person' },
    { id: 'stay-3', type: 'Stay', name: 'Private Room', price: 4500, image: '/images/gallery/gallery-8.png', unit: 'room (2 pax)' },
];

export function BookingSection() {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [time, setTime] = useState<string>('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cart, setCart] = useState<Record<string, number>>({});
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const updateQuantity = (id: string, delta: number) => {
        setCart(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + delta);
            if (next === 0) {
                const { [id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [id]: next };
        });
    };

    const totalAmount = Object.entries(cart).reduce((sum, [id, qty]) => {
        const product = PRODUCTS.find(p => p.id === id);
        return sum + (product ? product.price * qty : 0);
    }, 0);

    const loadScript = (src: string) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePaymentSuccess = async () => {
        const formattedDate = date ? date.toLocaleDateString() : 'N/A';
        const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;

        try {
            // Send Invoice Email via API
            await fetch('http://localhost:3001/api/send-invoice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    invoiceNumber,
                    invoiceData: {
                        date: formattedDate,
                        time,
                        amount: totalAmount.toLocaleString(),
                        phone: phone,
                    }
                }),
            });
            console.log('Invoice email sent successfully');
        } catch (error) {
            console.error('Failed to send invoice email', error);
        }

        // Generate PDF Invoice
        import('jspdf').then(jsPDF => {
            import('jspdf-autotable').then(autoTable => {
                const doc = new jsPDF.default();

                // Header
                doc.setFontSize(20);
                doc.setTextColor(40, 40, 40);
                doc.text("The Eco Ranch", 105, 20, { align: "center" });

                doc.setFontSize(10);
                doc.text("Kanakapura, Karnataka", 105, 26, { align: "center" });
                doc.text("Contact: +91 74118 89506", 105, 31, { align: "center" });

                // Divider
                doc.setDrawColor(200, 200, 200);
                doc.line(15, 35, 195, 35);

                // Invoice Details
                doc.setFontSize(12);
                doc.text(`Invoice #: ${invoiceNumber}`, 15, 45);
                doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 45);

                doc.text(`Billed To:`, 15, 55);
                doc.setFontSize(11);
                doc.setTextColor(100);
                doc.text(name, 15, 61);
                doc.text(phone, 15, 66);
                doc.text(email, 15, 71);

                doc.setTextColor(40);
                doc.text(`Visit Date: ${formattedDate}`, 150, 61);
                doc.text(`Time: ${time}`, 150, 66);

                // Table
                const tableData = Object.entries(cart).map(([id, qty]) => {
                    const product = PRODUCTS.find(p => p.id === id);
                    if (!product) return [];
                    return [product.name, qty, `Rs ${product.price.toLocaleString()}`, `Rs ${(product.price * qty).toLocaleString()}`];
                });

                // @ts-ignore
                autoTable.default(doc, {
                    startY: 80,
                    head: [['Item', 'Qty', 'Price', 'Total']],
                    body: tableData,
                    theme: 'grid',
                    headStyles: { fillColor: [111, 143, 114] }, // Ranch Green
                    foot: [['', '', 'Grand Total', `Rs ${totalAmount.toLocaleString()}`]],
                    footStyles: { fillColor: [242, 166, 90] } // Ranch Orange
                });

                // Footer
                doc.setFontSize(10);
                doc.setTextColor(150);
                doc.text("Thank you for choosing The Eco Ranch!", 105, 280, { align: "center" });

                doc.save(`Invoice_${invoiceNumber}.pdf`);
            });
        });

        console.log(`Booking Confirmed: ${invoiceNumber} for ${email}`);
        alert('Booking Confirmed! Your invoice has been emailed and is downloading.');
        setCart({});
        setName('');
        setEmail('');
        setPhone('');
    };

    const handleBook = async () => {
        if (!name || !email || !phone) {
            alert('Please enter your name, phone number, and email');
            return;
        }
        if (totalAmount === 0) {
            alert('Please select at least one experience or stay');
            return;
        }
        if (!date || !time) {
            alert('Please select a date and time');
            return;
        }

        // 1. Load Razorpay Script
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        // 2. Create Order on Server (Force 1 Rupee for Testing)
        try {
            const result = await fetch('http://localhost:3001/api/razorpay', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 1 }), // TESTING: 1 Rupee
            });

            const data = await result.json();

            if (!data.success) {
                alert('Server error. Please try again.');
                return;
            }

            const options = {
                key: data.key,
                amount: data.amount,
                currency: data.currency,
                name: "The Eco Ranch",
                description: "Booking Payment",
                order_id: data.orderId,
                handler: function (response: any) {
                    console.log("Payment ID: ", response.razorpay_payment_id);
                    handlePaymentSuccess();
                },
                prefill: {
                    name: name,
                    email: email,
                    contact: phone,
                },
                theme: {
                    color: "#F2A65A",
                },
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error("Payment Error:", error);
            alert('Something went wrong. check console.');
        }
    };

    return (
        <section id="booking" className="py-24 bg-secondary/30 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <Reveal>
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Book Your Adventure</h2>
                        <p className="mt-4 text-lg text-stone-600">
                            Select your experiences, choose a date, and get ready for the ranch life.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Product Selection */}
                    <Reveal delay={0.2} className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-[#6F8F72] rounded-full"></span>
                                Select Experiences & Stays
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {PRODUCTS.map((product) => (
                                    <div key={product.id} className="flex gap-4 p-3 rounded-2xl border border-stone-100 hover:border-[#F2A65A]/50 transition-all bg-stone-50/50">
                                        <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-stone-200">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h4 className="font-semibold text-stone-900 text-sm">{product.name}</h4>
                                                    <span className="text-xs font-medium px-2 py-0.5 bg-[#F2A65A]/10 text-[#F2A65A] rounded-full">{product.type}</span>
                                                </div>
                                                <p className="text-sm text-stone-500">Rs {product.price.toLocaleString()} <span className="text-xs">/ {product.unit}</span></p>
                                            </div>

                                            <div className="flex items-center gap-3 mt-2">
                                                <button
                                                    onClick={() => updateQuantity(product.id, -1)}
                                                    className="w-7 h-7 flex items-center justify-center rounded-full bg-stone-200 hover:bg-stone-300 transition-colors"
                                                    disabled={!cart[product.id]}
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="text-sm font-bold w-4 text-center">{cart[product.id] || 0}</span>
                                                <button
                                                    onClick={() => updateQuantity(product.id, 1)}
                                                    className="w-7 h-7 flex items-center justify-center rounded-full bg-[#6F8F72] text-white hover:bg-[#6F8F72]/90 transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-[#6F8F72] rounded-full"></span>
                                Schedule Your Visit
                            </h3>
                            <div className="max-w-5xl mx-auto">
                                <AppointmentDatePicker
                                    onDateChange={(d) => setDate(d)}
                                    onTimeChange={(t) => setTime(t)}
                                />
                            </div>
                        </div>
                    </Reveal>

                    {/* Checkout Form & Summary */}
                    <Reveal delay={0.4} className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-6 shadow-xl border border-stone-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5 text-[#F2A65A]" />
                                Your Selection
                            </h3>

                            {Object.keys(cart).length === 0 ? (
                                <p className="text-stone-400 text-center py-8 text-sm italic">No items selected</p>
                            ) : (
                                <div className="space-y-4 mb-6">
                                    {Object.entries(cart).map(([id, qty]) => {
                                        const product = PRODUCTS.find(p => p.id === id);
                                        if (!product) return null;
                                        return (
                                            <div key={id} className="flex justify-between items-center text-sm">
                                                <div>
                                                    <p className="font-medium text-stone-900">{product.name}</p>
                                                    <p className="text-xs text-stone-500">{qty} x Rs {product.price.toLocaleString()}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-stone-900">Rs {(product.price * qty).toLocaleString()}</p>
                                                    <button onClick={() => setCart(prev => { const { [id]: _, ...rest } = prev; return rest; })} className="text-xs text-red-400 hover:text-red-500">
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className="border-t border-stone-100 pt-4 flex justify-between items-center">
                                        <span className="font-bold text-lg">Total</span>
                                        <span className="font-bold text-xl text-[#F2A65A]">Rs {totalAmount.toLocaleString()}</span>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4 pt-6 border-t border-stone-100">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="block w-full rounded-xl border-stone-200 py-2.5 text-sm focus:ring-[#F2A65A] bg-stone-50"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Your Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="block w-full rounded-xl border-stone-200 py-2.5 text-sm focus:ring-[#F2A65A] bg-stone-50"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-xl border-stone-200 py-2.5 text-sm focus:ring-[#F2A65A] bg-stone-50"
                                        placeholder="Email Address"
                                    />
                                </div>

                                <Button
                                    onClick={handleBook}
                                    size="lg"
                                    className="w-full rounded-xl bg-[#F2A65A] text-white hover:bg-[#F2A65A]/90 font-bold h-12 mt-4"
                                    disabled={totalAmount === 0 || !date || !time}
                                >
                                    Proceed to Book
                                </Button>
                                <p className="text-xs text-stone-400 text-center mt-2">
                                    Secure Payment
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
