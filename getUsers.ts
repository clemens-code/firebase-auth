import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase/auth";
import { useRouter } from "next/navigation";


export function getUser() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUser(authUser);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (user === undefined) {
                return;
            }
            if (user?.email !== authUser?.email) {
                router.refresh();
            }
        });
    }, [user]);

    return user;
}
