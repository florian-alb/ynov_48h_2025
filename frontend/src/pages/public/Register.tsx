import Register_form from "@/components/auth/Register_form.tsx";

const Login = () => {
    return (
        <div
            className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Register_form/>
            </div>
        </div>
    );
};

export default Login;
