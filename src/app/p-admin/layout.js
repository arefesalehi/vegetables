import AosInt from "@/utils/aos";
import { authUser } from "@/utils/serverHelpers";
import ScrollToTop from "@/utils/scrollToTop";

export default async function RootLayout({ children }) {

  const user = await authUser()
  console.log('user homepage=>', user);

  return (
    <html lang="fa" dir="rtl">
    
      <body>
        <AosInt />


        {children}
     
     
        <ScrollToTop/>
      </body>
    </html>
  );
}
