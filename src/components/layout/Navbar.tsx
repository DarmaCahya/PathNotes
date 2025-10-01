import { Link } from "react-router-dom"
import { Button } from "../ui/button"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent border-b-[1px] border-black text-black">
            <div className="flex justify-between gap-4 p-4 mx-40">
                <div>
                    <Link to="/" className="text-4xl domine-bold">PathNotes</Link>
                </div>
                <div className="flex gap-4 items-center justify-center text-xl">
                    <Link to="/">Home</Link>
                    <Link to="/article">Article</Link>

                    <Button>
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    )
}