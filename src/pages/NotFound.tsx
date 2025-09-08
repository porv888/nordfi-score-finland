import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Sivua ei löytynyt</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Etsimääsi sivua ei löydy. Se on saatettu siirtää, poistaa tai osoite on virheellinen.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate(-1)} variant="outline">
            Takaisin
          </Button>
          <Button onClick={() => navigate("/")}>
            Etusivulle
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound