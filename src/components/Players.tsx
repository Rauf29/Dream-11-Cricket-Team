import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Player } from "../type/player";
import PlayerCard from "./PlayerCard";
import SelectedPlayers from "./SelectedPlayers";


interface PlayersProps {
    playersPromise: Promise<Player[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
    const players = use(playersPromise);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

    const handleTabButton = (val: "available" | "selected"): void => {
        if (val === 'available') {
            setIsSelected(false);
        } else if (val === 'selected') {
            setIsSelected(true)
        }
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                <h2 className="text-xl sm:text-2xl font-bold">
                    {isSelected ? "Selected Players" : "Available Players"}

                </h2>

                <div className="flex items-center self-start sm:self-auto border rounded-full overflow-hidden text-sm font-semibold ">

                    <button
                        onClick={() => handleTabButton("available")}
                        className={`${isSelected === false ? "bg-lime-300" : ""
                            } px-4 sm:px-5 py-2 cursor-pointer`}
                    >
                        Available
                    </button>

                    <button
                        onClick={() => handleTabButton("selected")}
                        className={`${isSelected === true ? "bg-lime-300" : ""
                            } px-4 sm:px-5 py-2 text-gray-600 cursor-pointer`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>

                </div>

            </div>

            {isSelected === false ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                    {players.map((player) => {
                        return (
                            <PlayerCard
                                key={player.id}
                                player={player}
                                selectedPlayers={selectedPlayers}
                                setSelectedPlayers={
                                    setSelectedPlayers}
                                coin={coin}
                                setCoin={setCoin}

                            />
                        );
                    })}

                </div>
            ) :
                (
                    <div className="grid grid-cols-1 gap-4">

                        {selectedPlayers.map((player) => {
                            return (
                                <SelectedPlayers
                                    key={player.id}
                                    player={player}
                                    selectedPlayers={selectedPlayers}
                                    setSelectedPlayers={
                                        setSelectedPlayers}
                                />
                            );
                        })}

                    </div>
                )}





        </section>
    );
};

export default Players;