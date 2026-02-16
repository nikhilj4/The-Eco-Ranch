import React, { useState } from 'react';
import { Button } from './ui/button';
import { AppointmentDatePicker } from './ui/appointment-calendar';
import { PaymentModal } from './ui/payment-modal';
import { Reveal } from './ui/reveal';

const prices: Record<string, number> = {
    "The Farmland Heritage Ride": 3500,
    "The Wildwood Prestige Safari": 4000,
    "The Summit Grandeur Safari": 4500,
};

export function BookingSection() {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [time, setTime] = useState<string>('');
    const [people, setPeople] = useState<number>(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [packageType, setPackageType] = useState<string>('The Farmland Heritage Ride');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const pricePerPerson = prices[packageType] || 3500;
    const totalAmount = pricePerPerson * people;

    const handleSubmit = () => {
        if (!name || !email) {
            alert('Please enter your name and email');
            return;
        }
        setIsPaymentModalOpen(true);
    };

    const handlePaymentSuccess = () => {
        const formattedDate = date ? date.toLocaleDateString() : 'N/A';
        console.log(`Booking Confirmed: ${packageType} on ${formattedDate} at ${time} for ${people} people. Email: ${email}`);
        alert('Booking Confirmed! You will receive an email shortly.');
    };

    return (
        <section id="booking" className="py-24 bg-secondary/30 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Reveal>
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Book Your Adventure</h2>
                        <p className="mt-4 text-lg text-stone-600">
                            Ready to ride? Select your preferred date and time from the calendar below.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 max-w-5xl mx-auto flex flex-col items-center">
                        <AppointmentDatePicker
                            onDateChange={(d) => setDate(d)}
                            onTimeChange={(t) => setTime(t)}
                        />

                        <div className="w-full max-w-4xl mt-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
                            <div className="sm:col-span-12 md:col-span-3">
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Full name"
                                    className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 ring-1 ring-inset ring-stone-200 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-[#F2A65A] text-sm leading-6 bg-stone-50 h-12 shadow-sm font-medium"
                                />
                            </div>

                            <div className="sm:col-span-12 md:col-span-3">
                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 ring-1 ring-inset ring-stone-200 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-[#F2A65A] text-sm leading-6 bg-stone-50 h-12 shadow-sm font-medium"
                                />
                            </div>

                            <div className="sm:col-span-12 md:col-span-3">
                                <label htmlFor="package" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                                    Select Package
                                </label>
                                <select
                                    id="package"
                                    name="package"
                                    value={packageType}
                                    onChange={(e) => setPackageType(e.target.value)}
                                    className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 ring-1 ring-inset ring-stone-200 focus:ring-2 focus:ring-inset focus:ring-[#F2A65A] text-sm bg-stone-50 h-12 shadow-sm font-medium"
                                >
                                    <option value="The Farmland Heritage Ride">The Farmland Heritage Ride (₹3,500)</option>
                                    <option value="The Wildwood Prestige Safari">The Wildwood Prestige Safari (₹4,000)</option>
                                    <option value="The Summit Grandeur Safari">The Summit Grandeur Safari (₹4,500)</option>
                                </select>
                            </div>

                            <div className="sm:col-span-6 md:col-span-1">
                                <label htmlFor="people" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                                    Guests
                                </label>
                                <input
                                    type="number"
                                    name="people"
                                    id="people"
                                    min="1"
                                    max="10"
                                    value={people}
                                    onChange={(e) => setPeople(parseInt(e.target.value))}
                                    className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 ring-1 ring-inset ring-stone-200 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-[#F2A65A] text-sm leading-6 bg-stone-50 h-12 shadow-sm font-medium"
                                />
                            </div>

                            <div className="sm:col-span-6 md:col-span-2">
                                <Button
                                    onClick={handleSubmit}
                                    size="lg"
                                    className="w-full rounded-xl bg-[#F2A65A] text-white hover:bg-[#F2A65A]/90 font-bold text-base h-12 shadow-md hover:shadow-lg transition-all"
                                    disabled={!date || !time}
                                >
                                    Book
                                </Button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {isPaymentModalOpen && (
                <PaymentModal
                    isOpen={isPaymentModalOpen}
                    onClose={() => setIsPaymentModalOpen(false)}
                    totalAmount={totalAmount}
                    onSuccess={handlePaymentSuccess}
                    email={email}
                    contact={"+91 99999 99999"} // Dynamic contact can be added
                />
            )}
        </section>
    );
}
