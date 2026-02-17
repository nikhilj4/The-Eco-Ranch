import { FocusRail, type FocusRailItem } from "./ui/focus-rail";

const DEMO_ITEMS: FocusRailItem[] = [
    {
        id: 1,
        title: "Sunrise Trails",
        description: "Witness the golden hour on horseback as you traverse the awakening countryside.",
        meta: "Adventure • Sunrise",
        imageSrc: "https://images.unsplash.com/photo-1765655367035-ff516ef27919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJpZGluZyUyMGFkdmVudHVyZSUyMHRyYWlsfGVufDF8fHx8MTc3MTA2OTA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
        href: "#experiences",
    },
    {
        id: 2,
        title: "Forest Expedition",
        description: "Navigate through dense, serene forests and reconnect with nature's rhythm.",
        meta: "Nature • Peace",
        imageSrc: "https://images.unsplash.com/photo-1625749670846-8d5629e85a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMG5hdHVyZXxlbnwxfHx8fDE3NzEwNjkwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        href: "#experiences",
    },
    {
        id: 3,
        title: "Starlight Camping",
        description: "End your day by the campfire under a blanket of stars in our premium tents.",
        meta: "Night • Fire",
        imageSrc: "https://images.unsplash.com/photo-1637481819841-4795ab86da6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwdGVudCUyMHN1bnNldHxlbnwxfHx8fDE3NzEwNjkwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        href: "#stays",
    },
    {
        id: 4,
        title: "Jeep Safari",
        description: "Explore the rugged terrain and cover more ground with our guided jeep tours.",
        meta: "Speed • Dust",
        imageSrc: "https://images.unsplash.com/photo-1758881534566-fd5c54d7e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWVwJTIwc2FmYXJpJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzcxMDY5MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        href: "#experiences",
    },
    {
        id: 5,
        title: "Ranch Life",
        description: "Immerse yourself in the daily life of the ranch and bond with our spirited horses.",
        meta: "Animals • Love",
        imageSrc: "https://images.unsplash.com/photo-1658379515186-b7b9524c9ddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJhbmNoJTIwZmFybXxlbnwxfHx8fDE3NzEwNjkwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        href: "#img",
    },
];

export function FocusRailSection() {
    return (
        <section className="w-full bg-neutral-950 flex flex-col items-center justify-center py-24">
            {/* Title */}
            <div className="mb-12 text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Stories</h2>
                <p className="text-neutral-400 text-lg">Navigate through our most cherished experiences.</p>
            </div>

            {/* The Component */}
            <FocusRail
                items={DEMO_ITEMS}
                autoPlay={true}
                loop={true}
            />
        </section>
    );
}
