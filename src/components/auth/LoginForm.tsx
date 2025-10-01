import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  
export function LoginForm() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <Button className="text-xl py-6">
                        Mulai menulis
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-[#F8F4EC]">
                <DialogHeader className="flex flex-col justify-center items-center text-[#2E2E2E]">
                    <DialogTitle>Login to Your Account</DialogTitle>
                    <DialogDescription>
                        Enter your email below to login to your account
                    </DialogDescription>
                </DialogHeader>
        
                <form className="flex flex-col gap-6 text-[#2E2E2E]">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
        
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a
                                href="#"
                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                            >
                            Forgot your password?
                            </a>
                        </div>
                        <Input 
                            id="password" 
                            type="password" 
                            placeholder="Enter your passsword"
                            required 
                        />
                    </div>
                </form>
                <DialogFooter>
                    <div className="flex w-full flex-col gap-2">
                        <Button type="submit" className="w-full bg-[#FF6B6B] hover:bg-[#794e4e]">
                            Login
                        </Button>
                        {/* <Button variant="outline" className="w-full bg-[#A8D5BA] hover:bg-[#324138] hover:text-white">
                            Sign Up
                        </Button> */}
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}  