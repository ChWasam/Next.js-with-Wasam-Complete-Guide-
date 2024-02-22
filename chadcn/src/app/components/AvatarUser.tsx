import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/app/components/ui/avatar"
  
  export function AvatarUser() {
    return (
      <Avatar>
        <AvatarImage src="logo.webp" alt="@shadcn" />
{/* <AvatarImage<Image src={'/logo.webp'} alt ='logo'> </Image> /> */}

        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  