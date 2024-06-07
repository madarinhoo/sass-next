
import {signIn} from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function ButtonsProviders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Button onClick={async () => await signIn('gmail')} className="flex items-center gap-2">
          
          <span>Continuer avec Google</span>
        </Button>
        <Button onClick={async() =>  await signIn('github')} className="flex items-center gap-2">
    
          <span>Continuer avec GitHub</span>
        </Button>
      </div>
    </>
  );
}