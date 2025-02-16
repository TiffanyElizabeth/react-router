import { useAlertContext } from "../contexts/AlertContext";

export default function Alert() {
    const { alertData, setAlertData } = useAlertContext();

    const handleAlertClose = () => {
        setAlertData({ message: "" });
    };

    if (!alertData.message) return null;

    return (
        <div className="alert" onClick={handleAlertClose}>
            {alertData.message}
        </div>
    );
}