const nodemailer= require("nodemailer")
const controller = {
async contactUs(req,res){
    try {
        const { name, email, subject, message} = req.body;
      if ( name && email && subject && message) {
        let mailTransporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "gokulakrishnan.k@tardiverse.com",
            pass: "ikjysxxlzbguhfqx",
          },
        });

        //   HTML for the email
        const html = `
        <div>Hello,</div>
        <div>The details from the ‘Contact us’ form are follows:</div>
        <div><h3 style="display:inline">1. Name     :  </h3>  ${name}</div>
        <div><h3 style="display:inline">2. Email ID : </h3>  ${email}</div>
        <div><h3 style="display:inline">3. Company  : </h3>  ${subject}</div>
        <div><h3 style="display:inline">4. Remarks  : </h3>  ${message}</div>
        `;

        //   email details
        let details = {
          from: email,
          to: "gokulakrishnan.k@tardiverse.com",
          subject: "TardiEdu || Contact us Form Response",
          html: html,
          //   html: html,
        };

        //   sending the mail for registeration
        mailTransporter
          .sendMail(details)
          .then((info) => {
            res
              .status(200)
              .json({ message: "Contact us Form Submitted Sucessfully", status: true });
          })
          .catch((err) =>
            console.log("Error in sending the mail for contact us form", err)
          );
      } else {
        res.status(400).json({ message: "Fill all the inputs", status: false });
      }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:`Error in Sending the email ${error}`})
    }
}

};
module.exports = controller;
