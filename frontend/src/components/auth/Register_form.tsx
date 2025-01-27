import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useState} from "react";
import {Link} from "react-router-dom";

const Login_form = () => {
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [password, setPassword] = useState("");

    const register = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Logging pseudo : ", pseudo, ", email:", email, ",Conf : ", emailConf, "and password", password);
        fetch("http://localhost:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pseudo: pseudo,
                email: email,
                emailConf: emailConf,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem("token", data.access);
            })
    }

    return (
        <div className={cn("flex flex-col gap-6")}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Register</CardTitle>
                    <CardDescription>
                        Enter your email below to register to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="pseudo">Pseudo</Label>
                                <Input
                                    id="pseudo"
                                    type="text"
                                    placeholder="Pseudo"
                                    value={pseudo}
                                    onChange={(e) => setPseudo(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="emailConf">Email
                                    Confirmation</Label>
                                <Input
                                    id="emailConf"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={emailConf}
                                    onChange={(e) => setEmailConf(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       required/>
                            </div>
                            <Button type="submit" onClick={register}
                                    className="w-full">
                                Register
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            have an account?{" "}
                            <Link to="/login"
                                  className="underline underline-offset-4">
                                Login
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login_form;
