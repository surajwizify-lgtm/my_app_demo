import { useState } from "react";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileFormSection from "@/components/profile/ProfileFormSection";
import theme from "@/styles/theme";

const INITIAL_USER = {
    name: "Aisha Kapoor",
    phone: "+91 98765 43210",
    email: "aisha.kapoor@example.com",
    gender: "Female",
    dob: "1992-05-14",
    bloodGroup: "O+",
    address: "24, Lakeview Residency, MG Road, Bangalore, Karnataka - 560001",
    avatar: "",
};

export default function ProfilePage() {
    const [user, setUser] = useState(INITIAL_USER);
    const [formData, setFormData] = useState(INITIAL_USER);
    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEdit = () => {
        if (isEditing) {
            setUser(formData);
        }
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setFormData(user);
        setIsEditing(false);
    };

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div style={{ backgroundColor: theme.colors.background, minHeight: "100vh" }}>
            <ProfileHeader
                user={isEditing ? formData : user}
                isEditing={isEditing}
                onToggleEdit={handleToggleEdit}
                onCancel={handleCancel}
            />
            <ProfileFormSection
                formData={isEditing ? formData : user}
                isEditing={isEditing}
                onChange={handleChange}
            />
        </div>
    );
}