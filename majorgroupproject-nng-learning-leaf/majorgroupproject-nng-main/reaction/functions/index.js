const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//Email made with nodemailer and postcards

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_NAME = 'Learning Leaf';

//ALL THE SERVER SIDE FUNCTIONS 
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
   
      const email = user.email; // The email of the user.
      const displayName = user.displayName; // The display name of the user.

    
      return sendWelcomeEmail(email, displayName);
});

async function sendWelcomeEmail(email, displayName) {
    //check if displayName null
    let name;
    if(displayName === null){
        name = "New User";
    }else{
        name = displayName;
    }

    //all images are hosted on firebase storage
    const logoLink = "https://firebasestorage.googleapis.com/v0/b/reaction-b91a6.appspot.com/o/welcomeEmail%2Fleaf.png?alt=media&token=3bfba7a5-527f-4440-90e5-154c3215d5b6";
    const headerLink = "https://firebasestorage.googleapis.com/v0/b/reaction-b91a6.appspot.com/o/welcomeEmail%2Fwelcome.jpg?alt=media&token=80cf68b8-1459-4dfa-bf64-a3e4adcb78e1";
    const graphLink = "https://firebasestorage.googleapis.com/v0/b/reaction-b91a6.appspot.com/o/welcomeEmail%2Fgraph%201.png?alt=media&token=3fadd47c-ea94-4ab6-af3e-d3bd3548a896";
    const addUserLink = "https://firebasestorage.googleapis.com/v0/b/reaction-b91a6.appspot.com/o/welcomeEmail%2Fteacher%201.png?alt=media&token=3ef7dd40-f371-4cc9-910b-16f0030e21f0";
    const planeLink = "https://firebasestorage.googleapis.com/v0/b/reaction-b91a6.appspot.com/o/welcomeEmail%2Fplane%201.png?alt=media&token=fe6415ad-8ef7-4deb-89b5-2020c0614701";

    //content
    const aboutUsContent = "Our goal is to  make interaction between teachers and students easy again. With online learning many students tend to keep their cameras off while in class. This lack of facial expressions make it difficult for teachers to engage with their students and understand whether or not the students are comfortable with the material. With Learning Leaf we will overcome this problem with 3 easy steps!";
    const teacherContent = "Create an account to use all the features of Learning Leaf and it is absolutely free!";
    const distributeContent = "After signing up, teachers can distribute class codes to get feedback for each class.";
    const feedbackContent = "Review your feedback through our graphs and personal comments to see student progression and concerns.";
    const benefitsContent = "Students love using our software as it makes student submission completely anonymous. Whereas other professors/teachers love using our simple UI to view feedback and create and manage their lectures.";
    
    const mailOptions = {
        from:`${APP_NAME} <noreply@firebase.com>`,
        to: email,
        subject: `Welcome to ${APP_NAME}!`,
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <style type="text/css">
    @media screen {
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 300;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKruRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKruQg.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VflQ.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vfkw.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 500;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKvuRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKvuQg.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 700;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3uRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3uQg.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 800;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7uRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7uQg.woff') format('woff');
      }
    }
  </style>
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    .ReadMsgBody,
    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
      line-height: 100%;
    }

    div[style*="margin: 14px 0"],
    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    table,
    td {
      mso-table-lspace: 0;
      mso-table-rspace: 0;
    }

    table,
    tr,
    td {
      border-collapse: collapse;
    }

    body,
    td,
    th,
    p,
    div,
    li,
    a,
    span {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      mso-line-height-rule: exactly;
    }

    img {
      border: 0;
      outline: none;
      line-height: 100%;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      -webkit-font-smoothing: antialiased;
    }

    .pc-gmail-fix {
      display: none;
      display: none !important;
    }

    @media screen and (min-width: 621px) {
      .pc-email-container {
        width: 620px !important;
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:620px) {
      .pc-sm-p-24-20-30 {
        padding: 24px 20px 30px !important
      }
      .pc-sm-p-35-10-15 {
        padding: 35px 10px 15px !important
      }
      .pc-sm-mw-50pc {
        max-width: 50% !important
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:525px) {
      .pc-xs-p-15-10-20 {
        padding: 15px 10px 20px !important
      }
      .pc-xs-h-100 {
        height: 100px !important
      }
      .pc-xs-br-disabled br {
        display: none !important
      }
      .pc-xs-fs-30 {
        font-size: 30px !important
      }
      .pc-xs-lh-42 {
        line-height: 42px !important
      }
      .pc-xs-p-25-0-5 {
        padding: 25px 0 5px !important
      }
      .pc-xs-mw-100pc {
        max-width: 100% !important
      }
    }
  </style>
  <!--[if mso]>
    <style type="text/css">
        .pc-fb-font {
            font-family: Helvetica, Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>
<body style="width: 100% !important; margin: 0; padding: 0; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f4f4f4" class="">
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px; color: #151515;">This is preheader text. Some clients will show this text as a preview.</div>
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px;">
    ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
  </div>
  <table class="pc-email-body" role="presentation" style="table-layout: fixed;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f4f4f4">
    <tbody>
      <tr>
        <td class="pc-email-body-inner" valign="top" align="center">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4"/>
            </v:background>
            <![endif]-->
          <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
          <table class="pc-email-container" role="presentation" style="margin: 0 auto; max-width: 620px;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="padding: 0 10px;" valign="top" align="left">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 1px; line-height: 1px;" height="20">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- BEGIN MODULE: Header 1 -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="background-color: #1a1a1d; background-position: top center; background-size: cover; border-radius: 8px; background-image: url('${headerLink}')" valign="top" bgcolor="#1a1a1d" background="images/welcome-cTZ.jpg">
                          <!--[if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                <v:fill type="frame" src="images/welcome-cTZ.jpg" color="#1a1a1d"></v:fill>
                <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                    <div style="font-size: 0; line-height: 0;">
                        <table width="600" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center">
                            <tr>
                                <td style="font-size: 14px; line-height: 1.5;" valign="top">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                        <tr>
                                            <td colspan="3" height="24" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="30" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            <td valign="top" align="left">
            <![endif]-->
                          <!--[if !gte mso 9]><!-->
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="" style="padding: 22px 51px 39px 30px" pc-default-class="pc-sm-p-24-20-30 pc-xs-p-15-10-20" pc-default-padding="24px 30px 40px" valign="top">
                                  <!--<![endif]-->
                                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="padding: 10px;" valign="top">
                                          <img src="${logoLink}" alt="" style="max-width: 100%; height: auto; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #ffffff;" width="46" height="41">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td class="pc-xs-h-100" style="line-height: 1px; font-size: 1px;" height="135">&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td class="pc-fb-font" style="padding: 0 10px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 21px; font-weight: 500; color: #ffffff" valign="top">Welcome to Learning Leaf,</td>
                                      </tr>
                                      <tr>
                                        <td class="pc-xs-fs-30 pc-xs-lh-42 pc-fb-font" style="padding: 13px 10px 0; letter-spacing: -0.7px; line-height: 46px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; color: #ffffff;" valign="top">${name}!</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if !gte mso 9]><!-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--<![endif]-->
                          <!--[if gte mso 9]>
                                            </td>
                                            <td width="30" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" height="40" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </v:textbox>
            </v:rect>
            <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Header 1 -->
                  <!-- BEGIN MODULE: Feature 1 -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 1px; line-height: 1px;" height="10">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-10-15 pc-xs-p-25-0-5" style="padding: 40px 20px; background-color: #1a1a1d; border-radius: 8px" valign="top" bgcolor="#1a1a1d">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700; line-height: 34px; letter-spacing: -0.4px; color: #99ff85; padding: 0 20px" valign="top">About Us.</td>
                              </tr>
                              <tr>
                                <td style="font-size: 1px; line-height: 1px;" height="10">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 300; line-height: 28px; letter-spacing: -0.2px; color: #9B9B9B; padding: 0 20px;" valign="top">${aboutUsContent}</td>
                              </tr>
                              <tr>
                                <td style="font-size: 1px; line-height: 1px;" height="20">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td style="font-size: 0;" valign="top">
                                  <!--[if (gte mso 9)|(IE)]><table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="33%" valign="top"><![endif]-->
                                  <div class="pc-sm-mw-50pc pc-xs-mw-100pc" style="display: inline-block; width: 100%; max-width: 186px; vertical-align: top;">
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding: 20px;" valign="top">
                                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr>
                                                  <td valign="top">
                                                    <img src="${addUserLink}" alt="" style="max-width: 100%; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; display: block; color: #1B1B1B" width="62" height="50">
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style="font-size: 1px; line-height: 1px;" height="10">&nbsp;</td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 500; line-height: 24px; letter-spacing: -0.2px; color: #99ff85" valign="top">Teacher Sign Up</td>
                                                </tr>
                                                <tr>
                                                  <td style="font-size: 1px; line-height: 1px;" height="6">&nbsp;</td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td class="pc-fb-font pc-xs-br-disabled" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 300; line-height: 20px; letter-spacing: -0.2px; color: #9B9B9B;" valign="top">${teacherContent}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if (gte mso 9)|(IE)]></td><td width="33%" valign="top"><![endif]-->
                                  <div class="pc-sm-mw-50pc pc-xs-mw-100pc" style="display: inline-block; width: 100%; max-width: 186px; vertical-align: top;">
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding: 20px;" valign="top">
                                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr>
                                                  <td valign="top">
                                                    <img src="${planeLink}" alt="" style="max-width: 100%; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; display: block; color: #1B1B1B" width="50" height="50">
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style="font-size: 1px; line-height: 1px;" height="10">&nbsp;</td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 500; line-height: 24px; letter-spacing: -0.2px; color: #99ff85" valign="top">Distribute Code</td>
                                                </tr>
                                                <tr>
                                                  <td style="font-size: 1px; line-height: 1px;" height="6">&nbsp;</td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 300; line-height: 20px; letter-spacing: -0.2px; color: #9B9B9B;" valign="top">${distributeContent}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if (gte mso 9)|(IE)]></td><td width="33%" valign="top"><![endif]-->
                                  <div class="pc-sm-mw-50pc pc-xs-mw-100pc" style="display: inline-block; width: 100%; max-width: 186px; vertical-align: top;">
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding: 20px;" valign="top">
                                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr>
                                                  <td valign="top">
                                                    <img src="${graphLink}" alt="" style="max-width: 100%; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; display: block; color: #1B1B1B" width="50" height="50">
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style="font-size: 1px; line-height: 1px;" height="10">&nbsp;</td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 500; line-height: 24px; letter-spacing: -0.2px; color: #99ff85" valign="top">Review Feedback</td>
                                                </tr>
                                                <tr>
                                                  <td style="font-size: 1px; line-height: 1px;" height="6">&nbsp;</td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 300; line-height: 20px; letter-spacing: -0.2px; color: #9B9B9B;" valign="top">${feedbackContent}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Feature 1 -->
                  <!-- BEGIN MODULE: Feature 1 -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 1px; line-height: 1px;" height="8">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-10-15 pc-xs-p-25-0-5" style="padding: 40px 20px; background-color: #1a1a1d; border-radius: 8px" valign="top" bgcolor="#1a1a1d">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700; line-height: 34px; letter-spacing: -0.4px; color: #99ff85; padding: 0 20px" valign="top">Benefits.</td>
                              </tr>
                              <tr>
                                <td style="font-size: 1px; line-height: 1px;" height="10">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 300; line-height: 28px; letter-spacing: -0.2px; color: #9B9B9B; padding: 0 20px;" valign="top">${benefitsContent}</td>
                              </tr>
                              <tr>
                                <td style="font-size: 1px; line-height: 1px;" height="20">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Feature 1 -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 1px; line-height: 1px;" height="20">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Fix for Gmail on iOS -->
  <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
</body>
</html>
        `
    }

    await mailTransport.sendMail(mailOptions);
    functions.logger.log('New welcome email sent to:', email);
    return null;
  }
  
exports.sendByeEmail = functions.auth.user().onDelete((user) => {
    // [END onDeleteTrigger]
    const email = user.email;
    const displayName = user.displayName;
    
    return sendGoodbyeEmail(email, displayName);
});

    
async function sendGoodbyeEmail(email, displayName) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
    };

    mailOptions.subject = `Bye!`;
    mailOptions.text = `Hey ${displayName || ''}!, We confirm that we have deleted your ${APP_NAME} account. We are sad to see you leave especially setu patel.`;
        
    await mailTransport.sendMail(mailOptions);
    functions.logger.log('Account deletion confirmation email sent to:', email);
    return null;
}

//CALLABLE FUNCTIONS 
exports.sendNotifEmail = functions.https.onCall( (data,context) =>{
    const email = data.email;
    const name = data.name;
    const code = data.code;
    const lecName = data.lecName;

    return sendNotificationEmail(email,name,lecName,code);
});

async function sendNotificationEmail(email,name,lecName,code){
    const headerLink = "https://firebasestorage.googleapis.com/v0/b/reaction-b91a6.appspot.com/o/welcomeEmail%2Fwelcome.jpg?alt=media&token=80cf68b8-1459-4dfa-bf64-a3e4adcb78e1";
    const logoLink = "https://firebasestorage.googleapis.com/v0/b/reaction-b91a6.appspot.com/o/welcomeEmail%2Fleaf.png?alt=media&token=3bfba7a5-527f-4440-90e5-154c3215d5b6";
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
        subject: `Share your new code!`,
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <style type="text/css">
    @media screen {
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 300;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKruRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKruQg.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VflQ.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vfkw.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 500;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKvuRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKvuQg.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 700;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3uRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3uQg.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 800;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7uRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7uQg.woff') format('woff');
      }
    }
  </style>
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    .ReadMsgBody,
    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
      line-height: 100%;
    }

    div[style*="margin: 14px 0"],
    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    table,
    td {
      mso-table-lspace: 0;
      mso-table-rspace: 0;
    }

    table,
    tr,
    td {
      border-collapse: collapse;
    }

    body,
    td,
    th,
    p,
    div,
    li,
    a,
    span {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      mso-line-height-rule: exactly;
    }

    img {
      border: 0;
      outline: none;
      line-height: 100%;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      -webkit-font-smoothing: antialiased;
    }

    .pc-gmail-fix {
      display: none;
      display: none !important;
    }

    @media screen and (min-width: 621px) {
      .pc-email-container {
        width: 620px !important;
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:620px) {
      .pc-sm-p-24-20-30 {
        padding: 24px 20px 30px !important
      }
      .pc-sm-p-35-30 {
        padding: 35px 30px !important
      }
      .pc-sm-p-35-10-15 {
        padding: 35px 10px 15px !important
      }
      .pc-sm-mw-50pc {
        max-width: 50% !important
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:525px) {
      .pc-xs-p-15-10-20 {
        padding: 15px 10px 20px !important
      }
      .pc-xs-h-100 {
        height: 100px !important
      }
      .pc-xs-br-disabled br {
        display: none !important
      }
      .pc-xs-fs-30 {
        font-size: 30px !important
      }
      .pc-xs-lh-42 {
        line-height: 42px !important
      }
      .pc-xs-p-25-20 {
        padding: 25px 20px !important
      }
      .pc-xs-p-25-0-5 {
        padding: 25px 0 5px !important
      }
      .pc-xs-mw-100pc {
        max-width: 100% !important
      }
    }
  </style>
  <!--[if mso]>
    <style type="text/css">
        .pc-fb-font {
            font-family: Helvetica, Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>
<body style="width: 100% !important; margin: 0; padding: 0; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f4f4f4" class="">
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px; color: #151515;">This is preheader text. Some clients will show this text as a preview.</div>
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px;">
    ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
  </div>
  <table class="pc-email-body" role="presentation" style="table-layout: fixed;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f4f4f4">
    <tbody>
      <tr>
        <td class="pc-email-body-inner" valign="top" align="center">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4"/>
            </v:background>
            <![endif]-->
          <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
          <table class="pc-email-container" role="presentation" style="margin: 0 auto; max-width: 620px;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="padding: 0 10px;" valign="top" align="left">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 1px; line-height: 1px;" height="20">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- BEGIN MODULE: Header 1 -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="background-color: #1a1a1d; background-position: top center; background-size: cover; border-radius: 8px; background-image: url('${headerLink}')" valign="top" bgcolor="#1a1a1d" background="images/welcome-cTZ.jpg">
                          <!--[if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                <v:fill type="frame" src="images/welcome-cTZ.jpg" color="#1a1a1d"></v:fill>
                <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                    <div style="font-size: 0; line-height: 0;">
                        <table width="600" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center">
                            <tr>
                                <td style="font-size: 14px; line-height: 1.5;" valign="top">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                        <tr>
                                            <td colspan="3" height="24" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="30" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            <td valign="top" align="left">
            <![endif]-->
                          <!--[if !gte mso 9]><!-->
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="" style="padding: 22px 51px 39px 30px" pc-default-class="pc-sm-p-24-20-30 pc-xs-p-15-10-20" pc-default-padding="24px 30px 40px" valign="top">
                                  <!--<![endif]-->
                                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="padding: 10px;" valign="top">
                                          <img src="${logoLink}" alt="" style="max-width: 100%; height: auto; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #ffffff;" width="46" height="41">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td class="pc-xs-h-100" style="line-height: 1px; font-size: 1px;" height="135">&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td class="pc-fb-font" style="padding: 0 10px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 25px; font-weight: 500; color: #ffffff" valign="top">Hey,</td>
                                      </tr>
                                      <tr>
                                        <td class="pc-xs-fs-30 pc-xs-lh-42 pc-fb-font" style="padding: 13px 10px 0; letter-spacing: -0.7px; line-height: 46px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; color: #ffffff;" valign="top">${name}.</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if !gte mso 9]><!-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--<![endif]-->
                          <!--[if gte mso 9]>
                                            </td>
                                            <td width="30" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" height="40" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </v:textbox>
            </v:rect>
            <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Header 1 -->
                  <!-- BEGIN MODULE: Call to Action 2 -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 1px; line-height: 1px;" height="8">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 40px; background-color: #1a1a1d; border-radius: 8px" valign="top" bgcolor="#1a1a1d">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="pc-xs-fs-30 pc-xs-lh-42 pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 900; line-height: 46px; letter-spacing: -0.6px; color: #99ff85; text-align: center" valign="top">Your new Lecture Code </td>
                              </tr>
                              <tr>
                                <td style="font-size: 1px; line-height: 1px;" height="10">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 300; line-height: 28px; color: #ffffff; letter-spacing: -0.2px" valign="top" align="center">${lecName} : <strong>${code}</strong></td>
                              </tr>
                              <tr>
                                <td style="font-size: 1px; line-height: 1px;" height="15">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 300; line-height: 28px; color: #9B9B9B; text-align: center;" valign="top">Start sharing your code now!</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Call to Action 2 -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 1px; line-height: 1px;" height="20">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Fix for Gmail on iOS -->
  <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
</body>
</html>
        `
    };

    await mailTransport.sendMail(mailOptions);
    functions.logger.log('New notification email sent to:', email);
    return null;
}