import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle> Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to cretate a chat bot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>PH</AvatarFallback>
              <AvatarImage src="https://github.com/PedroJuri.png"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Me:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non, quam illo sit temporibus fugiat eius nostrum illum architecto nobis repudiandae, a corrupti rem itaque, ex ut necessitatibus! Incidunt, laboriosam.
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>PH</AvatarFallback>
              <AvatarImage src="https://github.com/github.png"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">AI:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non, quam illo sit temporibus fugiat eius nostrum illum architecto nobis repudiandae, a corrupti rem itaque, ex ut necessitatibus! Incidunt, laboriosam.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you"/>
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
