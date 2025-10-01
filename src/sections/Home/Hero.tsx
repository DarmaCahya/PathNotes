import { TypeAnimation } from 'react-type-animation';
import { LoginForm } from '@/components/auth/LoginForm';

export default function Hero() {
    return (
        <section className="bg-[#fcfaf0] min-h-screen flex justify-center items-center">
            <div className="flex flex-col text-black text-center gap-4">
                <h1 className="text-5xl font-bold">
                    <TypeAnimation
                        sequence={[
                            'Adventure Awaits',
                            2000,
                            'Your Story, Your Journey',
                            2000,
                            'Explore. Write. Inspire.',
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className="text-xl text-gray-700">
                    Jelajahi dunia, catat kisahmu, bagikan inspirasimu.
                </p>

                <LoginForm />
            </div>
        </section>
    );
}