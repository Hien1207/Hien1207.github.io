<template>
  <div >
    <div class="container">
    <div class="container-left">
        <h1 class="hero__header">All your data.
          <br>
            No entry.
          <br>
        </h1>
        <p class="p-text">Get everything you need from your PDFs, scanned documents, images, and more — with the help of machine learning.</p>
        <div class="hero-values__container">
            <div class="hero-values"> 
               <h6 >100 <br> docs</h6>
               <p>processed <br>in 100 <br> seconds <br></p>
            </div>
             <div class="hero-values"> 
               <h6 >5 <br> minutes</h6>
               <p>set-up time <br></p>
            </div>
             <div class="hero-values"> 
               <h6 >95+% <br> accuracy</h6>
               <p>for document extraction <br> models <br></p>
            </div>
        </div>
        <div class="hero-values__container">
            <div class="email-form"> 
              <a class="form">Try for free</a>
            </div>
        </div>
        <p>Already using Impira?</p>
    </div>
     <div class="container-left">
       <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cbfd46d8044e70d86498_Homepage%20hero-min.png" class="contained-image">
     </div>
    <HelloWorld/>
    </div>
    <div class="container" style="display:block; margin-top:100px"> 
      <div class="narrow-section--centered">
         <h2>Set up with any file type, fast.</h2>
      </div>
      <div class="layout-grid">
         <div class="feature-card">
           <div class="card-image">
             <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cbf6779a4f7f07766f86_form.svg">
           </div>
           <div>
             <h6 class="feature-card__heading">Forms</h6>
             <p style="text-align:center">Pull information automatically to process insurance, order forms, mortgage, and other applications more efficiently, and get back to your customers sooner.</p>
           </div>
         </div>
         <div class="feature-card">
           <div class="card-image">
             <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cbf6518578e830ea9a54_extract-table.svg">
           </div>
           <div>
             <h6 class="feature-card__heading">Invoices</h6>
             <p style="text-align:center">Extract totals, invoice numbers, payment terms, and more from multiple invoices in just a few clicks. Then, export your data directly into a spreadsheet.</p>
           </div>
         </div>
          <div class="feature-card">
           <div class="card-image">
             <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cbf6fc3e14eb28ab1b0e_image.svg">
           </div>
           <div>
             <h6 class="feature-card__heading">Images</h6>
             <p style="text-align:center">Automatically label photos to make searching by places, colors, and other attributes a snap. Attach usage contracts and invoices to images to track additional metadata.</p>
           </div>
         </div>
          <div class="feature-card">
           <div class="card-image">
             <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cbf633da05229344df05_pdf.svg">
           </div>
           <div>
             <h6 class="feature-card__heading">Contracts</h6>
             <p style="text-align:center">Automatically pull fields like party names, effective dates, and renewal terms from contracts, whether they’re PDFs, scans, or images.</p>
           </div>
         </div>
      </div>
    </div>
    <div class="container" style="margin-top:100px">
        <div class="container-left" style="margin-top:130px">
          <h2>Add your files <br></h2>
          <p>Drag and drop your files, use our Dropbox integration, or upload through our API. Work with any type of file, from PowerPoint presentations to scanned documents — our OCR technology will extract the information you need.</p>
        </div>
        <div class="container-left">
          <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cfac5eae118fdad51a45_add%20files%20graphic.png" class="contained-image">
        </div>
    </div>
    <div class="container">
        <div class="container-left">
           <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cbfc69f9f7395bd64b89_api-min.png" class="contained-image">
        </div>
        <div class="container-left" style="margin-top:150px">
          <h2>Extend with APIs<br></h2>
          <p>Use a custom REST API created just for your data to query anything you need, including files, labels with confidence scores, and even complex aggregations. You can also upload files and update labels directly through the API.</p>
        </div>
    </div>
    <div class="container" style="display:block; "> 
      <div class="narrow-section--centered">
         <h2>Enterprise ready, too.</h2>
      </div>
      <div class="layout-grid">
         <div class="feature-card" style="width:25%">
           <div class="card-image" style="height:200px">
             <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cbf65a47ae2a9e9a55c8_scale.svg">
           </div>
           <div>
             <h6 class="feature-card__heading">Scalable</h6>
             <p style="text-align:center">Adding more users, countries, properties, or  complex taxonomies to your existing datasets is fast and flexible.</p>
           </div>
         </div>
         <div class="feature-card" style="width:25%">
           <div class="card-image" style="height:200px">
             <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cbf6ab30c2531edd8ccb_integrations.svg">
           </div>
           <div>
             <h6 class="feature-card__heading">Integrated</h6>
             <p style="text-align:center">Impira works with your existing tools, delivering a rich experience for searching and analyzing across all your data. </p>
           </div>
         </div>
          <div class="feature-card"  style="width:25%">
           <div class="card-image" style="height:200px">
             <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5fb5cbf70c1569bf4198c35c_security.svg">
           </div>
           <div>
             <h6 class="feature-card__heading">Secure</h6>
             <p style="text-align:center">You control your data with role-based access control, audit logging, and SSO authentication. Impira encrypts your data in transit (TLS 1.2) and at rest (AES-256).  </p>
           </div>
         </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.container{
    position: relative;
    z-index: 3;
    display: flex;
    width: 90%;
    max-width: none;
    margin-right: 5%;
    margin-left: 5%;
    background-color: transparent;
}
.container-left{
  width: 40%;
  display: block;
    overflow: visible;
    height: auto;
    max-width: 960px;
    min-height: 0;
    min-width: 0;
    margin-left: 0;
    padding-top: 24px;
    padding-left: 36px;
    padding-right: 36px;
}
.hero__header{
  margin-top: 0;
    margin-bottom: 24px;
    font-size: 80px;
    line-height: 1;
    text-align: left;
    font-weight: 1;
}
.p-text{
  margin-bottom: 16px;
    font-size: 18px;
    line-height: 1.65;
    font-weight: 400;
}
.hero-values__container{
     display: flex;
    margin-bottom: 12px
}
.hero-values{
  margin-right: 36px;
}
h6{
    margin-top: 0;
    margin-bottom: 16px;
    color: #0f0f0f;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;
}
.email-form{
    width: 150px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 8px;
}
.form{
   display: inline-block;
    min-height: 30px;
    padding: 10px 24px 8px;
    background-color: #0f0f0f;
    color: #fff;
    line-height: 2;
    font-weight: 500;
    letter-spacing: .25px;
    cursor: pointer;
     transition:all 0.5s ease-in-out ;
}
.form:hover{
  background: white;
  color: black;
  border:2px solid black;
    text-decoration: none;
}
.contained-image{
  width: 100%;
    max-width: 600px;
    margin-right: 0;
    margin-left: 0;
    padding: 32px 0 32px 32px;
    align-self: center;
}
.narrow-section--centered{
  display: flex;
    max-width: 920px;
    margin-right: auto;
    margin-left: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
h2{
    margin-top: 36px;
    margin-bottom: 36px;
    color: #0f0f0f;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 400;
}
.layout-grid{
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.feature-card{
  display: flex;
  width: 16%;
    padding: 16px 50px;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}
.card-image{
    width: 150px;
    height: 150px;
    max-height: 200px;
    max-width: 200px;
    margin-bottom: 20px;
   -webkit-align-self: center;
}
.feature-card__heading{
  text-align: center;
}
.centered{
    display: flex;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    align-self: center;
    text-align: center;
}
p{
    margin-top: 0;
    margin-bottom: 16px;
    border: 1px #0f0f0f;
    color: #3f3f3f;
    font-size: 16px;
    line-height: 1.65;
    font-weight: 400;
}
</style>