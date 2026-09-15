import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { Player } from "../type/player";

interface PlayerProps {
    player: Player;
    selectedPlayers: Player[];
    setSelectedPlayers: Dispatch<SetStateAction<Player[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}
const PlayerCard = ({ player, selectedPlayers, setSelectedPlayers, coin, setCoin }: PlayerProps) => {
    const handleChoosePlayer = () => {
        if (coin >= player.price) {
            setCoin(coin - player.price)
            setSelectedPlayers([...selectedPlayers, player]);
            toast.success(`${player.name} added successfully`);

        } else {
            alert("You don't have enough coin. Please claim free credit.");
        }

    }

    const isSelect = selectedPlayers.some((selectedPlayer) => {
        return selectedPlayer.id === player.id
    })

    return (
        <div
            className="
                                border border-gray-200
                                rounded-2xl
                                overflow-hidden
                                transition-all duration-300
                                hover:border-pink-400
                                hover:shadow-lg
                            "
        >


            <img
                src={player.image}
                alt={player.name}
                className="
                                    w-full
                                    h-56
                                    sm:h-64
                                    lg:h-72
                                    object-cover
                                    bg-gray-200
                                "
            />


            <div className="p-4">


                <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-500">
                        👤
                    </span>

                    <span className="font-semibold text-base">
                        {player.name}
                    </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">

                    <span className="text-xs text-gray-500 flex items-center gap-1">
                        🏳️ {player.country}
                    </span>

                    <span className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600">
                        {player.role}
                    </span>

                </div>

                <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">
                        Rating
                    </span>

                    <span className="text-gray-500">
                        {player.rating}
                    </span>
                </div>


                <div className="text-sm mb-4 mt-2">
                    <span className="font-semibold">
                        {player.bat}
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    <span className="text-sm font-semibold">
                        Price: ${player.price}
                    </span>

                    <button
                        onClick={handleChoosePlayer}
                        disabled={isSelect}
                        className="
                                            w-full sm:w-auto
                                            border border-gray-300
                                            rounded-lg
                                            px-3 py-1.5
                                            text-sm
                                            hover:bg-gray-50
                                            hover:border-gray-400
                                            transition  disabled:bg-gray-300
                                            disabled:text-gray-500
                                            disabled:border-gray-300
                                            disabled:cursor-not-allowed
                                            cursor-pointer"
                    >
                        {isSelect === true ? "Selected" : "Choose Player"}
                    </button>

                </div>

            </div>

        </div>
    );
};

export default PlayerCard;