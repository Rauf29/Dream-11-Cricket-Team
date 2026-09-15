import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import HeroImg from "../assets/banner-main.png";
import HeroBg from "../assets/bg-shadow.png";
const Hero = ({ coin, setCoin }: { coin: number, setCoin: Dispatch<SetStateAction<number>> }) => {
    return (
        <section className="max-w-7xl mx-auto px-6">

            <div
                style={{ backgroundImage: `url(${HeroBg})` }}
                className=" relative overflow-hidden rounded-3xl bg-cover bg-center text-center py-16 px-6">
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <img src={HeroImg}
                        className="w-40 h-40 mb-4" />

                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>

                    <p className="text-gray-300 mb-6">
                        Beyond Boundaries Beyond Limits
                    </p>

                    <button

                        onClick={() => {
                            if (coin === 0) {
                                setCoin(50000);
                                toast.success("Free Credit Claimed");
                            } else if (coin <= 4500) {
                                let coinNedded = 50000 - coin;
                                setCoin(coin + coinNedded);
                                toast.success("Free Credit Claimed");
                            }
                        }}
                        disabled={coin >= 4500}
                        className="bg-lime-300 hover:bg-lime-400 text-black font-semibold px-6 py-3 rounded-lg border border-lime-200 transition disabled:bg-gray-300
                        disabled:text-gray-500
                        disabled:border-gray-300
                        disabled:cursor-not-allowed
                        cursor-pointer">
                        {(coin === 0 || coin <= 4500) ? "Claim Free Credit" : "Already Claimed"}
                    </button>

                </div>

            </div>

        </section >
    );
};

export default Hero;