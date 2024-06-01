'use client'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalSetup = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#1B1E49"}},"hideEventTypeDetails":false,"layout":"month_view"});
          })(); 
    }, [])
    
    return ( 
        <div>
            <Cal style={{width:"100%",height:"100%",overflow:"scroll"}} config={{layout: 'month_view'}} calLink="nex-tech-media/30min"></Cal>
        </div>
     );
}
 
export default CalSetup;