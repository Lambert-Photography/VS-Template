import * as React from "react"
import { Layout } from "../components/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import GoBack from "../components/goBack"
import { Footer } from "../components/footer"












export default function DisclaimerPage() {
  const { companyname, siteUrl } = useSiteMetadata()
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Disclaimer`} /> */}


<section className="outer section section--gradient" >
      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>

<h1 className="title" style={{fontSize:'50px'}}>Disclaimer</h1>
    


The materials on this website(s) also known as {siteUrl},  are provided “as is”. {companyname} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, {companyname} does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on his Internet web site(s) or otherwise relating to such materials or on any sites linked to this site(s).



<h3>Limitations</h3>



<p>In no event shall {companyname} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on {companyname}’s Internet site(s), even if {companyname} or a {companyname} authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>



<h3>Intellectual Property</h3>



<p>All photos on this website(s) are owned by {companyname}. All of the content featured or displayed on the website(s), including, but not limited to, still images, text, pictorial works, video images, still images of video, graphic designs, audio recordings, multimedia combinations, and computer programs, including web-based programs (“Content”) is owned or licensed by {companyname}.</p>



<p>Advertisements for third-party entities are not considered Content for the purposes of this Section. However, these advertisements are owned or licensed by their respective third-party entities and are subject to protections similar to those set forth in these Terms.</p>



<p>Pursuant to the copyright and trademark laws of the United States, you agree:</p>



<ol style={{margin:'0 0 0 2em',}}><li>That you may only download Content that {companyname} designates as offered for download to any single computer a single copy of any Content for personal and noncommercial use.</li><li>To not reproduce, distribute, modify, re-post on another Service (regardless of the server on which the Content is stored), or sell any Content without specific written authorization from {companyname}.</li><li>To maintain any and all copyright or other proprietary notices embedded in or attached to any Content.</li><li>To refrain from framing, inline linking, or mirroring any portion of the website.</li></ol>



<h3>Revisions and Errata</h3>



<p>The materials appearing on {companyname}’s web site(s) could include technical, typographical, or photographic errors. {companyname} does not warrant that any of the materials on its web site(s) are accurate, complete, or current. {companyname} may make changes to the materials contained on its web site(s) at any time without notice. {companyname} does not, however, make any commitment to update the materials.</p>



<h3>Links</h3>



<p>{companyname} has not reviewed all of the sites linked to its Internet web site(s) and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {companyname} or the web site(s). Use of any such linked web site is at the user’s own risk.</p>



<h3>Site Terms of Use Modifications</h3>



<p>{companyname} may revise these terms of use for its web site(s) at any time without notice. By using this web site(s) you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>



<h3>Governing Law</h3>



<p>Any claim relating to the {siteUrl} web site(s) shall be governed by the laws of the State that {companyname} is currently conducting business in and without regard to its conflict of law provisions.</p>



<p>General Terms and Conditions applicable to Use of a Web Site.</p>
			

    </div>
    <GoBack />
    </section>
    
    <Footer />
    </Layout>

  )
}
