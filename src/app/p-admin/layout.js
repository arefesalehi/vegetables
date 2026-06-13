
import { authUser } from "@/utils/serverHelpers";



export default async function RootLayout({ children }) {

  const user = await authUser()
  console.log('user homepage=>', user);






  return (
    <html lang="fa" dir="rtl">
    
      
   
   
        {children}
      
  
    </html>
  );
}
