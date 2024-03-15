import { HistoricoImages } from "../historicoImages/historicoImages";




export function InfoImages() {
    return (
        <div className="w-56 h-screen flex flex-col p-5 bg-white border border-r border-gray-200 rounded-lg">
            <div className="flex flex-col justify-center">
                <div>
                    <HistoricoImages />
                </div>
            </div>
        </div>
    )
}