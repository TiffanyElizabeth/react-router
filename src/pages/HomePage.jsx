import { useAlertContext } from "../contexts/AlertContext";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
    const { setAlertData } = useAlertContext();

    useEffect(() => {
        setAlertData({
            message: "**Warning: This blog will go offline 1 March 2025**",
        });
    }, [setAlertData]);

    return (
        <div>Welcome to the blog</div>
    )
}