import type { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import type { Player } from "../type/Player";

interface PlayerProps {
    player: Player;
    selectedPlayers: Player[];
    setSelectedPlayers: Dispatch<SetStateAction<Player[]>>
}
const SelectedPlayers = ({ player, selectedPlayers, setSelectedPlayers }: PlayerProps) => {
    const handleRemoveFromStack = (player: Player) => {
        const remainingPlayer = selectedPlayers.filter((selectedPlayer) => selectedPlayer.id !== player.id);
        setSelectedPlayers(remainingPlayer);
        toast.success(`${player.name} removed successfully`);
    }

    return (
        <div className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-3">
            <div className="flex items-center gap-3">
                <span><img src={player.image} alt="" className=" w-16 h-16 rounded" /></span>

                <div>
                    <p className="text-[18px] font-bold mb-1">
                        {player.name}
                    </p>

                    <p className="text-[14px] text-gray-400">
                        {player.role}
                    </p>
                </div>
            </div>

            <button
                onClick={() => handleRemoveFromStack(player)}

                className="text-gray-400 hover:text-red-500 transition-colors duration-300 cursor-pointer mr-3">
                <RxCross2 />
            </button>
        </div>
    );
};

export default SelectedPlayers;