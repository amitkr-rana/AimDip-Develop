
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the project root
app.use(express.static(__dirname));

// Serve index.html on the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* ===== EMAIL CONFIG ===== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "contactsocialmanish@gmail.com",
    pass: "scvuxluctrnwdfsu",
  },
});

/* ===== SYLLABUS LINKS ===== */
const SYLLABUS_LINKS = {
  bihar: {
    state: {
      "patna university": {
        ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
        pro: {
          /* ===================== BBA ===================== */
          bba: [
            {
              title: "BBA All Semester",
              url: "https://content.patnawomenscollege.in/nep-syllabus/syllabus%20bba%2024_240322_154926.pdf",
            },
            // { title: "BBA 3rd–4th Semester", url: "" },
            // { title: "BBA 5th–6th Semester", url: "" }
          ],

          /* ===================== BCA ===================== */
          bca: [
            {
              title: "BCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110457.pdf",
            },
            // { title: "BCA 3rd–4th Semester", url: "" },
            // { title: "BCA 5th–6th Semester", url: "" }
          ],

          /* ===================== MBA ===================== */
          mba: [
            {
              title: "MBA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112917.pdf",
            },
            // { title: "MBA 3rd–4th Semester", url: "" }
          ],

          /* ===================== MCA ===================== */
          mca: [
            {
              title: "MCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110494.pdf",
            },
            // { title: "MCA 3rd–4th Semester", url: "" },
            // { title: "MCA 5th–6th Semester", url: "" }
          ],

          /* ===================== LLB (3 YEAR) ===================== */
          llb: [
            {
              title: "LLB 1st–2nd Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/01/202401301989016250.pdf",
            },
            //   { title: "LLB 3rd–4th Semester", url: "" },
            //   { title: "LLB 5th–6th Semester", url: "" }
          ],

          /* ===================== BA LLB (5 YEAR) ===================== */
          ba_llb: [
            {
              title: "BA LLB  Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112998.pdf",
            },
            // { title: "BA LLB 3rd–4th Semester", url: "" },
            // { title: "BA LLB 5th–6th Semester", url: "" },
            // { title: "BA LLB 7th–8th Semester", url: "" },
            // { title: "BA LLB 9th–10th Semester", url: "" }
          ],

          /* ===================== B.PHARM ===================== */
          // b_pharm: [
          //   { title: "B.Pharm 1st–2nd Semester", url: "" },
          //   { title: "B.Pharm 3rd–4th Semester", url: "" },
          //   { title: "B.Pharm 5th–6th Semester", url: "" },
          //   { title: "B.Pharm 7th–8th Semester", url: "" }
          // ],

          /* ===================== B.ED ===================== */
          b_ed: [
            {
              title: "B.Ed All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120190-2.pdf",
            },
            // { title: "B.Ed 3rd–4th Semester", url: "" }
          ],

          /* ===================== B.SC NURSING ===================== */
          // bsc_nursing: [
          //   { title: "B.Sc Nursing 1st–2nd Semester", url: "" },
          //   { title: "B.Sc Nursing 3rd–4th Semester", url: "" },
          //   { title: "B.Sc Nursing 5th–6th Semester", url: "" },
          //   { title: "B.Sc Nursing 7th–8th Semester", url: "" }
          // ],

          /* ===================== BPT ===================== */
          // bpt: [
          //   { title: "BPT 1st–2nd Semester", url: "" },
          //   { title: "BPT 3rd–4th Semester", url: "" },
          //   { title: "BPT 5th–6th Semester", url: "" },
          //   { title: "BPT 7th–8th Semester", url: "" }
          // ],

          /* ===================== BJMC ===================== */
          // bjmc: [
          //   { title: "BJMC 1st–2nd Semester", url: "" },
          //   { title: "BJMC 3rd–4th Semester", url: "" },
          //   { title: "BJMC 5th–6th Semester", url: "" }
          // ],

          /* ===================== PG DIPLOMA ===================== */
          // pg_diploma: [
          //   { title: "PG Diploma 1st–2nd Semester", url: "" }
          // ]
        },
      },

      //magadh university
      "magadh university": {
         ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },

        //professional

        pro: {
          /* ===================== BBA ===================== */
          bba: [
            {
              title: "BBA All Semester",
              url: "https://content.patnawomenscollege.in/nep-syllabus/syllabus%20bba%2024_240322_154926.pdf",
            },
            // { title: "BBA 3rd–4th Semester", url: "" },
            // { title: "BBA 5th–6th Semester", url: "" }
          ],

          /* ===================== BCA ===================== */
          bca: [
            {
              title: "BCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110457.pdf",
            },
            // { title: "BCA 3rd–4th Semester", url: "" },
            // { title: "BCA 5th–6th Semester", url: "" }
          ],

          /* ===================== MBA ===================== */
          mba: [
            {
              title: "MBA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112917.pdf",
            },
            // { title: "MBA 3rd–4th Semester", url: "" }
          ],

          /* ===================== MCA ===================== */
          mca: [
            {
              title: "MCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110494.pdf",
            },
            // { title: "MCA 3rd–4th Semester", url: "" },
            // { title: "MCA 5th–6th Semester", url: "" }
          ],

          /* ===================== LLB (3 YEAR) ===================== */
          // llb: [
          //   { title: "LLB 1st–2nd Semester", url: "" },
          //   { title: "LLB 3rd–4th Semester", url: "" },
          //   { title: "LLB 5th–6th Semester", url: "" }
          // ],

          /* ===================== BA LLB (5 YEAR) ===================== */
          ba_llb: [
            {
              title: "BA LLB  Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112998.pdf",
            },
            // { title: "BA LLB 3rd–4th Semester", url: "" },
            // { title: "BA LLB 5th–6th Semester", url: "" },
            // { title: "BA LLB 7th–8th Semester", url: "" },
            // { title: "BA LLB 9th–10th Semester", url: "" }
          ],

          /* ===================== B.PHARM ===================== */
          // b_pharm: [
          //   { title: "B.Pharm 1st–2nd Semester", url: "" },
          //   { title: "B.Pharm 3rd–4th Semester", url: "" },
          //   { title: "B.Pharm 5th–6th Semester", url: "" },
          //   { title: "B.Pharm 7th–8th Semester", url: "" }
          // ],

          /* ===================== B.ED ===================== */
          b_ed: [
            {
              title: "B.Ed All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120190-2.pdf",
            },
            // { title: "B.Ed 3rd–4th Semester", url: "" }
          ],

          /* ===================== B.SC NURSING ===================== */
          // bsc_nursing: [
          //   { title: "B.Sc Nursing 1st–2nd Semester", url: "" },
          //   { title: "B.Sc Nursing 3rd–4th Semester", url: "" },
          //   { title: "B.Sc Nursing 5th–6th Semester", url: "" },
          //   { title: "B.Sc Nursing 7th–8th Semester", url: "" }
          // ],

          /* ===================== BPT ===================== */
          // bpt: [
          //   { title: "BPT 1st–2nd Semester", url: "" },
          //   { title: "BPT 3rd–4th Semester", url: "" },
          //   { title: "BPT 5th–6th Semester", url: "" },
          //   { title: "BPT 7th–8th Semester", url: "" }
          // ],

          /* ===================== BJMC ===================== */
          // bjmc: [
          //   { title: "BJMC 1st–2nd Semester", url: "" },
          //   { title: "BJMC 3rd–4th Semester", url: "" },
          //   { title: "BJMC 5th–6th Semester", url: "" }
          // ],

          /* ===================== PG DIPLOMA ===================== */
          // pg_diploma: [
          //   { title: "PG Diploma 1st–2nd Semester", url: "" }
          // ]
        },
      },

      //magadh end

      //babashaheb bhim rao

      "babasaheb bhimrao ambedkar bihar university (brabu)": {
          ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },

        //professional

        pro: {
          /* ===================== BBA ===================== */
          bba: [
            {
              title: "BBA All Semester",
              url: "https://content.patnawomenscollege.in/nep-syllabus/syllabus%20bba%2024_240322_154926.pdf",
            },
            // { title: "BBA 3rd–4th Semester", url: "" },
            // { title: "BBA 5th–6th Semester", url: "" }
          ],

          /* ===================== BCA ===================== */
          bca: [
            {
              title: "BCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110457.pdf",
            },
            // { title: "BCA 3rd–4th Semester", url: "" },
            // { title: "BCA 5th–6th Semester", url: "" }
          ],

          /* ===================== MBA ===================== */
          mba: [
            {
              title: "MBA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112917.pdf",
            },
            // { title: "MBA 3rd–4th Semester", url: "" }
          ],

          /* ===================== MCA ===================== */
          mca: [
            {
              title: "MCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110494.pdf",
            },
            // { title: "MCA 3rd–4th Semester", url: "" },
            // { title: "MCA 5th–6th Semester", url: "" }
          ],

          /* ===================== LLB (3 YEAR) ===================== */
          // llb: [
          //   { title: "LLB 1st–2nd Semester", url: "" },
          //   { title: "LLB 3rd–4th Semester", url: "" },
          //   { title: "LLB 5th–6th Semester", url: "" }
          // ],

          /* ===================== BA LLB (5 YEAR) ===================== */
          ba_llb: [
            {
              title: "BA LLB  Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112998.pdf",
            },
            // { title: "BA LLB 3rd–4th Semester", url: "" },
            // { title: "BA LLB 5th–6th Semester", url: "" },
            // { title: "BA LLB 7th–8th Semester", url: "" },
            // { title: "BA LLB 9th–10th Semester", url: "" }
          ],

          /* ===================== B.PHARM ===================== */
          // b_pharm: [
          //   { title: "B.Pharm 1st–2nd Semester", url: "" },
          //   { title: "B.Pharm 3rd–4th Semester", url: "" },
          //   { title: "B.Pharm 5th–6th Semester", url: "" },
          //   { title: "B.Pharm 7th–8th Semester", url: "" }
          // ],

          /* ===================== B.ED ===================== */
          b_ed: [
            {
              title: "B.Ed All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120190-2.pdf",
            },
            // { title: "B.Ed 3rd–4th Semester", url: "" }
          ],

          /* ===================== B.SC NURSING ===================== */
          // bsc_nursing: [
          //   { title: "B.Sc Nursing 1st–2nd Semester", url: "" },
          //   { title: "B.Sc Nursing 3rd–4th Semester", url: "" },
          //   { title: "B.Sc Nursing 5th–6th Semester", url: "" },
          //   { title: "B.Sc Nursing 7th–8th Semester", url: "" }
          // ],

          /* ===================== BPT ===================== */
          // bpt: [
          //   { title: "BPT 1st–2nd Semester", url: "" },
          //   { title: "BPT 3rd–4th Semester", url: "" },
          //   { title: "BPT 5th–6th Semester", url: "" },
          //   { title: "BPT 7th–8th Semester", url: "" }
          // ],

          /* ===================== BJMC ===================== */
          // bjmc: [
          //   { title: "BJMC 1st–2nd Semester", url: "" },
          //   { title: "BJMC 3rd–4th Semester", url: "" },
          //   { title: "BJMC 5th–6th Semester", url: "" }
          // ],

          /* ===================== PG DIPLOMA ===================== */
          // pg_diploma: [
          //   { title: "PG Diploma 1st–2nd Semester", url: "" }
          // ]
        },
      },

      //babashaheb bhim rao end

      //Tilka manjhi

      "tilka manjhi bhagalpur university": {
         ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
      },

      //tilka manjhi end

      //lalit narayan

      "lalit narayan mithila university": {
          ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },

        //professional

        pro: {
          /* ===================== BBA ===================== */
          bba: [
            {
              title: "BBA All Semester",
              url: "https://content.patnawomenscollege.in/nep-syllabus/syllabus%20bba%2024_240322_154926.pdf",
            },
            // { title: "BBA 3rd–4th Semester", url: "" },
            // { title: "BBA 5th–6th Semester", url: "" }
          ],

          /* ===================== BCA ===================== */
          bca: [
            {
              title: "BCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110457.pdf",
            },
            // { title: "BCA 3rd–4th Semester", url: "" },
            // { title: "BCA 5th–6th Semester", url: "" }
          ],

          /* ===================== MBA ===================== */
          mba: [
            {
              title: "MBA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112917.pdf",
            },
            // { title: "MBA 3rd–4th Semester", url: "" }
          ],

          /* ===================== MCA ===================== */
          mca: [
            {
              title: "MCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110494.pdf",
            },
            // { title: "MCA 3rd–4th Semester", url: "" },
            // { title: "MCA 5th–6th Semester", url: "" }
          ],

          /* ===================== LLB (3 YEAR) ===================== */
          // llb: [
          //   { title: "LLB 1st–2nd Semester", url: "" },
          //   { title: "LLB 3rd–4th Semester", url: "" },
          //   { title: "LLB 5th–6th Semester", url: "" }
          // ],

          /* ===================== BA LLB (5 YEAR) ===================== */
          ba_llb: [
            {
              title: "BA LLB  Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112998.pdf",
            },
            // { title: "BA LLB 3rd–4th Semester", url: "" },
            // { title: "BA LLB 5th–6th Semester", url: "" },
            // { title: "BA LLB 7th–8th Semester", url: "" },
            // { title: "BA LLB 9th–10th Semester", url: "" }
          ],

          /* ===================== B.PHARM ===================== */
          // b_pharm: [
          //   { title: "B.Pharm 1st–2nd Semester", url: "" },
          //   { title: "B.Pharm 3rd–4th Semester", url: "" },
          //   { title: "B.Pharm 5th–6th Semester", url: "" },
          //   { title: "B.Pharm 7th–8th Semester", url: "" }
          // ],

          /* ===================== B.ED ===================== */
          b_ed: [
            {
              title: "B.Ed All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120190-2.pdf",
            },
            // { title: "B.Ed 3rd–4th Semester", url: "" }
          ],

          /* ===================== B.SC NURSING ===================== */
          // bsc_nursing: [
          //   { title: "B.Sc Nursing 1st–2nd Semester", url: "" },
          //   { title: "B.Sc Nursing 3rd–4th Semester", url: "" },
          //   { title: "B.Sc Nursing 5th–6th Semester", url: "" },
          //   { title: "B.Sc Nursing 7th–8th Semester", url: "" }
          // ],

          /* ===================== BPT ===================== */
          // bpt: [
          //   { title: "BPT 1st–2nd Semester", url: "" },
          //   { title: "BPT 3rd–4th Semester", url: "" },
          //   { title: "BPT 5th–6th Semester", url: "" },
          //   { title: "BPT 7th–8th Semester", url: "" }
          // ],

          /* ===================== BJMC ===================== */
          // bjmc: [
          //   { title: "BJMC 1st–2nd Semester", url: "" },
          //   { title: "BJMC 3rd–4th Semester", url: "" },
          //   { title: "BJMC 5th–6th Semester", url: "" }
          // ],

          /* ===================== PG DIPLOMA ===================== */
          // pg_diploma: [
          //   { title: "PG Diploma 1st–2nd Semester", url: "" }
          // ]
        },

        //INTEGRATION
      },
      //lalit narayan end

      //veer kuwar singh
      "veer kunwar singh university": {
          ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },

        pro: {
          /* ===================== BBA ===================== */
          bba: [
            {
              title: "BBA All Semester",
              url: "https://content.patnawomenscollege.in/nep-syllabus/syllabus%20bba%2024_240322_154926.pdf",
            },
            // { title: "BBA 3rd–4th Semester", url: "" },
            // { title: "BBA 5th–6th Semester", url: "" }
          ],

          /* ===================== BCA ===================== */
          bca: [
            {
              title: "BCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110457.pdf",
            },
            // { title: "BCA 3rd–4th Semester", url: "" },
            // { title: "BCA 5th–6th Semester", url: "" }
          ],

          /* ===================== MBA ===================== */
          mba: [
            {
              title: "MBA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112917.pdf",
            },
            // { title: "MBA 3rd–4th Semester", url: "" }
          ],

          /* ===================== MCA ===================== */
          mca: [
            {
              title: "MCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110494.pdf",
            },
            // { title: "MCA 3rd–4th Semester", url: "" },
            // { title: "MCA 5th–6th Semester", url: "" }
          ],

          /* ===================== LLB (3 YEAR) ===================== */
          // llb: [
          //   { title: "LLB 1st–2nd Semester", url: "" },
          //   { title: "LLB 3rd–4th Semester", url: "" },
          //   { title: "LLB 5th–6th Semester", url: "" }
          // ],

          /* ===================== BA LLB (5 YEAR) ===================== */
          ba_llb: [
            {
              title: "BA LLB  Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112998.pdf",
            },
            // { title: "BA LLB 3rd–4th Semester", url: "" },
            // { title: "BA LLB 5th–6th Semester", url: "" },
            // { title: "BA LLB 7th–8th Semester", url: "" },
            // { title: "BA LLB 9th–10th Semester", url: "" }
          ],

          /* ===================== B.PHARM ===================== */
          // b_pharm: [
          //   { title: "B.Pharm 1st–2nd Semester", url: "" },
          //   { title: "B.Pharm 3rd–4th Semester", url: "" },
          //   { title: "B.Pharm 5th–6th Semester", url: "" },
          //   { title: "B.Pharm 7th–8th Semester", url: "" }
          // ],

          /* ===================== B.ED ===================== */
          b_ed: [
            {
              title: "B.Ed All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120190-2.pdf",
            },
            // { title: "B.Ed 3rd–4th Semester", url: "" }
          ],

          /* ===================== B.SC NURSING ===================== */
          // bsc_nursing: [
          //   { title: "B.Sc Nursing 1st–2nd Semester", url: "" },
          //   { title: "B.Sc Nursing 3rd–4th Semester", url: "" },
          //   { title: "B.Sc Nursing 5th–6th Semester", url: "" },
          //   { title: "B.Sc Nursing 7th–8th Semester", url: "" }
          // ],

          /* ===================== BPT ===================== */
          // bpt: [
          //   { title: "BPT 1st–2nd Semester", url: "" },
          //   { title: "BPT 3rd–4th Semester", url: "" },
          //   { title: "BPT 5th–6th Semester", url: "" },
          //   { title: "BPT 7th–8th Semester", url: "" }
          // ],

          /* ===================== BJMC ===================== */
          // bjmc: [
          //   { title: "BJMC 1st–2nd Semester", url: "" },
          //   { title: "BJMC 3rd–4th Semester", url: "" },
          //   { title: "BJMC 5th–6th Semester", url: "" }
          // ],

          /* ===================== PG DIPLOMA ===================== */
          // pg_diploma: [
          //   { title: "PG Diploma 1st–2nd Semester", url: "" }
          // ]
        },
        //veer kuwar singh end
      },

      //jai prakash university

      "jai prakash university": {
          ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
        //veer kuwar singh end
      },

      //jai prakash university end

      //purnia university
      "purnea university": {
          ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
        //veer kuwar singh end
      },

      //purniya university end

      //patliputra university
      "patliputra university": {
          ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
      },
      //patliputra university end

      //AKU
      "aryabhatta knowledge university": {
          ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },

        //professional

        pro: {
          /* ===================== BBA ===================== */
          bba: [
            {
              title: "BBA All Semester",
              url: "https://content.patnawomenscollege.in/nep-syllabus/syllabus%20bba%2024_240322_154926.pdf",
            },
            // { title: "BBA 3rd–4th Semester", url: "" },
            // { title: "BBA 5th–6th Semester", url: "" }
          ],

          /* ===================== BCA ===================== */
          bca: [
            {
              title: "BCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110457.pdf",
            },
            // { title: "BCA 3rd–4th Semester", url: "" },
            // { title: "BCA 5th–6th Semester", url: "" }
          ],

          /* ===================== MBA ===================== */
          mba: [
            {
              title: "MBA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112917.pdf",
            },
            // { title: "MBA 3rd–4th Semester", url: "" }
          ],

          /* ===================== MCA ===================== */
          mca: [
            {
              title: "MCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110494.pdf",
            },
            // { title: "MCA 3rd–4th Semester", url: "" },
            // { title: "MCA 5th–6th Semester", url: "" }
          ],

          /* ===================== LLB (3 YEAR) ===================== */
          // llb: [
          //   { title: "LLB 1st–2nd Semester", url: "" },
          //   { title: "LLB 3rd–4th Semester", url: "" },
          //   { title: "LLB 5th–6th Semester", url: "" }
          // ],

          /* ===================== BA LLB (5 YEAR) ===================== */
          ba_llb: [
            {
              title: "BA LLB  Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112998.pdf",
            },
            // { title: "BA LLB 3rd–4th Semester", url: "" },
            // { title: "BA LLB 5th–6th Semester", url: "" },
            // { title: "BA LLB 7th–8th Semester", url: "" },
            // { title: "BA LLB 9th–10th Semester", url: "" }
          ],

          /* ===================== B.PHARM ===================== */
          // b_pharm: [
          //   { title: "B.Pharm 1st–2nd Semester", url: "" },
          //   { title: "B.Pharm 3rd–4th Semester", url: "" },
          //   { title: "B.Pharm 5th–6th Semester", url: "" },
          //   { title: "B.Pharm 7th–8th Semester", url: "" }
          // ],

          /* ===================== B.ED ===================== */
          b_ed: [
            {
              title: "B.Ed All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120190-2.pdf",
            },
            // { title: "B.Ed 3rd–4th Semester", url: "" }
          ],

          /* ===================== B.SC NURSING ===================== */
          // bsc_nursing: [
          //   { title: "B.Sc Nursing 1st–2nd Semester", url: "" },
          //   { title: "B.Sc Nursing 3rd–4th Semester", url: "" },
          //   { title: "B.Sc Nursing 5th–6th Semester", url: "" },
          //   { title: "B.Sc Nursing 7th–8th Semester", url: "" }
          // ],

          /* ===================== BPT ===================== */
          // bpt: [
          //   { title: "BPT 1st–2nd Semester", url: "" },
          //   { title: "BPT 3rd–4th Semester", url: "" },
          //   { title: "BPT 5th–6th Semester", url: "" },
          //   { title: "BPT 7th–8th Semester", url: "" }
          // ],

          /* ===================== BJMC ===================== */
          // bjmc: [
          //   { title: "BJMC 1st–2nd Semester", url: "" },
          //   { title: "BJMC 3rd–4th Semester", url: "" },
          //   { title: "BJMC 5th–6th Semester", url: "" }
          // ],

          /* ===================== PG DIPLOMA ===================== */
          // pg_diploma: [
          //   { title: "PG Diploma 1st–2nd Semester", url: "" }
          // ]
        },
      },

      //aku end

      //nalanda open university

      "nalanda open university": {
          ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
      },
      //nalanda open university end

      //kameshwer singh
      "kameshwar singh darbhanga sanskrit university": {
          ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
      },
      //kameshwer singh end

      //maulana university

      "Maulana Mazharul Haque Arabic & Persian University": {
        //pg
       
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
      },
      //maulana university end

      //chanakya international law

      "chanakya national law university": {
        //pg
       pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
        pro: {
          /* ===================== BBA ===================== */
          bba: [
            {
              title: "BBA All Semester",
              url: "https://content.patnawomenscollege.in/nep-syllabus/syllabus%20bba%2024_240322_154926.pdf",
            },
            // { title: "BBA 3rd–4th Semester", url: "" },
            // { title: "BBA 5th–6th Semester", url: "" }
          ],

          /* ===================== BCA ===================== */
          bca: [
            {
              title: "BCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110457.pdf",
            },
            // { title: "BCA 3rd–4th Semester", url: "" },
            // { title: "BCA 5th–6th Semester", url: "" }
          ],

          /* ===================== MBA ===================== */
          mba: [
            {
              title: "MBA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112917.pdf",
            },
            // { title: "MBA 3rd–4th Semester", url: "" }
          ],

          /* ===================== MCA ===================== */
          mca: [
            {
              title: "MCA All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2022/11/2022110494.pdf",
            },
            // { title: "MCA 3rd–4th Semester", url: "" },
            // { title: "MCA 5th–6th Semester", url: "" }
          ],

          /* ===================== LLB (3 YEAR) ===================== */
          // llb: [
          //   { title: "LLB 1st–2nd Semester", url: "" },
          //   { title: "LLB 3rd–4th Semester", url: "" },
          //   { title: "LLB 5th–6th Semester", url: "" }
          // ],

          /* ===================== BA LLB (5 YEAR) ===================== */
          ba_llb: [
            {
              title: "BA LLB  Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112998.pdf",
            },
            // { title: "BA LLB 3rd–4th Semester", url: "" },
            // { title: "BA LLB 5th–6th Semester", url: "" },
            // { title: "BA LLB 7th–8th Semester", url: "" },
            // { title: "BA LLB 9th–10th Semester", url: "" }
          ],

          /* ===================== B.PHARM ===================== */
          // b_pharm: [
          //   { title: "B.Pharm 1st–2nd Semester", url: "" },
          //   { title: "B.Pharm 3rd–4th Semester", url: "" },
          //   { title: "B.Pharm 5th–6th Semester", url: "" },
          //   { title: "B.Pharm 7th–8th Semester", url: "" }
          // ],

          /* ===================== B.ED ===================== */
          b_ed: [
            {
              title: "B.Ed All Semester",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120190-2.pdf",
            },
            // { title: "B.Ed 3rd–4th Semester", url: "" }
          ],

          /* ===================== B.SC NURSING ===================== */
          // bsc_nursing: [
          //   { title: "B.Sc Nursing 1st–2nd Semester", url: "" },
          //   { title: "B.Sc Nursing 3rd–4th Semester", url: "" },
          //   { title: "B.Sc Nursing 5th–6th Semester", url: "" },
          //   { title: "B.Sc Nursing 7th–8th Semester", url: "" }
          // ],

          /* ===================== BPT ===================== */
          // bpt: [
          //   { title: "BPT 1st–2nd Semester", url: "" },
          //   { title: "BPT 3rd–4th Semester", url: "" },
          //   { title: "BPT 5th–6th Semester", url: "" },
          //   { title: "BPT 7th–8th Semester", url: "" }
          // ],

          /* ===================== BJMC ===================== */
          // bjmc: [
          //   { title: "BJMC 1st–2nd Semester", url: "" },
          //   { title: "BJMC 3rd–4th Semester", url: "" },
          //   { title: "BJMC 5th–6th Semester", url: "" }
          // ],

          /* ===================== PG DIPLOMA ===================== */
          // pg_diploma: [
          //   { title: "PG Diploma 1st–2nd Semester", url: "" }
          // ]
        },
      },
      //chanakya international law end

      //bihar aghriculture university
      "bihar agricultural university": {
        ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
      },

      //bihar aghriculture end

      //bihar animal
      "bihar animal sciences university": {
       ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
              ai: [
              {
                title: "Artificial Intelligence",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/12/202512051607444835.pdf",
              },
              
            ],
            
            
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },

      bjmc: {
            mass_communication: [
              {
              title: "Bachelor Journalism & Mass Communication (BJMC)",
              url: "https://www.nbcpatna.in/assets/bjmc.pdf",
              },
            
            ],
          },

blib: {
            blib: [
              {
              title: "BLib",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
            
            ],
          },
          bballb: {
            bllb: [
              {
              title: "BBA LLB",
              url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2025/11/202511261978853541.pdf",
              },
            
            ],
          },
          
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
          },
socialwork:{
  social_work: [
              {
                title: "Social Work ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2026/01/20260122255921065.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

gandhianpeacestudies:{
 peace_studies: [
              {
                title: " Peace Studies",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

majmc:{
 majmc: [
              {
                title: "MAJMC",
                url: "https://pup.ac.in/PDF/MasterDegree/CBCS%20%20Syllabus%20MJMC_0001.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mlib:{
 mlib: [
              {
                title: "MLib",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/05/20240503393500207.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
},

mcom:{
 commerce: [
              {
                title: "Commerce",
                url: "https://governor.bih.nic.in/regulations/",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
}
          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },

          // ]
          // }
        },
      },
      //bihar animal end

      //bihar enginerring university
      "bihar engineering university": {
        ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192132589459.pdf",
              },
              {
                title: "History 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219688146826.pdf",
              },
            ],
            geography: [
              {
                title: "Geography 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919717757514.pdf",
              },
              {
                title: "Geography 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/2023121966905081.pdf",
              },
            ],
            political_science: [
              {
                title: "Political Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192051702326.pdf",
              },
              {
                title: "Political Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312212057198264.pdf",
              },
            ],
            economics: [
              {
                title: "Economics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919844211905.pdf",
              },
              {
                title: "Economics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219868024009.pdf",
              },
            ],
            sociology: [
              {
                title: "Sociology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191580977919.pdf",
              },
              {
                title: "Sociology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231221138441973.pdf",
              },
            ],
            psychology: [
              {
                title: "Psychology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409192033234141.pdf",
              },
              {
                title: "Psychology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312202128689321.pdf",
              },
            ],
            philosophy: [
              {
                title: "Philosophy 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201884644424.pdf",
              },
              {
                title: "Philosophy 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219799352937.pdf",
              },
            ],
            english: [
              {
                title: "English 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202053995264.pdf",
              },
              {
                title: "English 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219812525663.pdf",
              },
            ],
            hindi: [
              {
                title: "Hindi 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920328775946.pdf",
              },
              {
                title: "Hindi 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201183064860.pdf",
              },
            ],
            urdu: [
              {
                title: "Urdu 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201484648984.pdf",
              },
              {
                title: "Urdu 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220490559299.pdf",
              },
            ],
            sanskrit: [
              {
                title: "Sanskrit 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920159033267.pdf",
              },
              {
                title: "Sanskrit 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219503974214.pdf",
              },
            ],
            maithili: [
              {
                title: "Maithili 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201104678692.pdf",
              },
              {
                title: "Maithili 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231220238766986.pdf",
              },
            ],
            education: [
              { title: "Education 1st–2nd Semester", url: "" },
              { title: "Education 3rd–8th Semester", url: "" },
            ],
            home_science: [
              {
                title: "Home Science 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409191954355028.pdf",
              },
              {
                title: "Home Science 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312201548935961.pdf",
              },
            ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication 1st–2nd Semester",
                url: "",
              },
              {
                title: "Journalism & Mass Communication 3rd–8th Semester",
                url: "",
              },
            ],
            social_work: [
              { title: "Social Work 1st–2nd Semester", url: "" },
              { title: "Social Work 3rd–8th Semester", url: "" },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202036213409.pdf",
              },
              {
                title: "Physics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219989677924.pdf",
              },
            ],
            chemistry: [
              {
                title: "Chemistry 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919598860546.pdf",
              },
              {
                title: "Chemistry 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192051069615.pdf",
              },
            ],
            mathematics: [
              {
                title: "Mathematics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201999790668.pdf",
              },
              {
                title: "Mathematics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191087498787.pdf",
              },
            ],
            statistics: [
              {
                title: "Statistics 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201565661621.pdf",
              },
              {
                title: "Statistics 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219705713277.pdf",
              },
            ],
            botany: [
              {
                title: "Botany 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240919358086608.pdf",
              },
              {
                title: "Botany 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312191172027396.pdf",
              },
            ],
            zoology: [
              {
                title: "Zoology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/20240920535475570.pdf",
              },
              {
                title: "Zoology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/20231219995656912.pdf",
              },
            ],
            geology: [
              {
                title: "Geology 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409201711132479.pdf",
              },
              {
                title: "Geology 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312211473026693.pdf",
              },
            ],
            // environmental_science: [
            //   { title: "Environmental Science 1st–2nd Semester", url: "" },
            //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            // ],
            // computer_science: [
            //   { title: "Computer Science 1st–2nd Semester", url: "" },
            //   { title: "Computer Science 3rd–8th Semester", url: "" }
            // ],
            // information_technology: [
            //   { title: "Information Technology 1st–2nd Semester", url: "" },
            //   { title: "Information Technology 3rd–8th Semester", url: "" }
            // ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–8th Semester", url: "" }
            // ]
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce 1st–2nd Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/06/202409202047010959.pdf",
              },
              {
                title: "Commerce 3rd–8th Semester",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2023/12/202312192017990054.pdf",
              },
            ],
          },
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History r",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113066-4.pdf",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120130-2.pdf",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083.pdf",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113081-1.pdf",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113039.pdf",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113086.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113068.pdf",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113071-1.pdf",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],
            hindi: [
              {
                title: "Hindi ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113099.pdf",
              },
              //  { title: "Hindi 3rd–4th Semester", url: "" }
            ],
            urdu: [
              {
                title: "Urdu ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113020-1.pdf",
              },
              //  { title: "Urdu 3rd–4th Semester", url: "" }
            ],
            sanskrit: [
              {
                title: "Sanskrit ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113021.pdf",
              },
              //  { title: "Sanskrit 3rd–4th Semester", url: "" }
            ],
            maithili: [
              {
                title: "Maithili ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113098-1.pdf",
              },
              // { title: "Maithili 3rd–4th Semester", url: "" }
            ],
            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112628-1.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://governor.bih.nic.in/regulations/page/5/",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120197-1.pdf",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120179-3.pdf",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/12/2021120117.pdf",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113012-1.pdf",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],
            botany: [
              {
                title: "Botany ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113069-3.pdf",
              },
              //  { title: "Botany 3rd–4th Semester", url: "" }
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113083-2.pdf",
              },
              // { title: "Zoology 3rd–4th Semester", url: "" }
            ],
            geology: [
              {
                title: "Geology ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112974-1.pdf",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021112698-2.pdf",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf",
              },
              //   { title: "Computer Science 3rd–4th Semester", url: "" }
            ],
            //  information_technology: [
            //    { title: "Information Technology 1st–2nd Semester", url: "" },
            // //   { title: "Information Technology 3rd–4th Semester", url: "" }
            //  ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–4th Semester", url: "" }
            // ]
          },

          /* ===================== MCOM ===================== */
          // mcom: {
          //   commerce: [
          //     { title: "Commerce 1st–2nd Semester", url: "" },
          //     { title: "Commerce 3rd–4th Semester", url: "" }
          //   ]
          // }
        },
      },

      //bihar eng end
    },

      central: {
      "central university of south bihar": {
 ug: {
          ba: {
            education:
              "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=377&Itemid=505",
          },

          bsc: {
            education: "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=377&Itemid=505",

            
          },
        },

        pg: {
          ma: {
            history:
              "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=288&Itemid=378",
            economics:
              "https://www.cusb.ac.in/images/dept/eco_studies/syllabus/MA_Economics_Syllabus_DESP_CUSB_Final.pdf",
            psychology:
              "https://www.cusb.ac.in/images/dept/psychological_sciences/syllabus/pg_nep_syllabus_psy.pdf",
            sociology:
              "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=320&Itemid=415",
            english:
              "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=361&Itemid=451",
          },

          msc: {
            geology:
              "https://www.cusb.ac.in/images/dept/geology/syllabus/Syllabus_MSc_Geology_NEP2020.pdf",
            biotechnology:
              "https://www.cusb.ac.in/images/dept/biotechonology/syllabus/2020_NEP_Msc_Biotechnology_Syllabus.pdf",
            environmental_science:
              "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=199&Itemid=369",
            physics:
              "https://www.cusb.ac.in/images/dept/physics/Syllabus/msc_syllabus_phy.pdf",
            chemistry:
              "https://www.cusb.ac.in/images/dept/chemistry/syllabus/syllabus_msc_chem.pdf",
            mathematics:
              "https://www.cusb.ac.in/images/dept/mathematics/syllabus/new/Syllabus_MSc.pdf",
            statistics:
              "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=344&Itemid=433",
            computer_science:
              "https://www.cusb.ac.in/images/dept/computer_science/Syllabus/MSc_Cs_Nep_Course_structure.pdf",

            psychology:
              "https://www.cusb.ac.in/images/dept/psychological_sciences/syllabus/pg_nep_syllabus_psy.pdf",
          },
        },

        int: {
          geography: [
            {
              title:
                "5-Year Integrated UG-PG in Geography (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/images/dept/geography/syllabus/BoS_Geography_compressed.pdf",
            },
          ],

          history: [
            {
              title:
                "5-Year Integrated UG-PG in History (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=288&Itemid=378",
            },
          ],

          commerce: [
            {
              title:
                "5-Year Integrated UG-PG in Commerce (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/images/dept/commerce_bstudies/syllabus/integrated_course_str_mcom.pdf",
            },
          ],

          economics: [
            {
              title:
                "5-Year Integrated UG-PG in Economics (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/images/dept/eco_studies/Syllabus_Integ_eco-1-12.pdf",
            },
          ],

          political_studies_international_relations: [
            {
              title:
                "5-Year Integrated UG-PG in Political Studies & International Relations (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/images/dept/political_studies/syllabus/ug_pg_syllabus_polsc.pdf",
            },
          ],

          sociology: [
            {
              title:
                "5-Year Integrated UG-PG in Sociology (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=320&Itemid=415",
            },
          ],

          psychology: [
            {
              title:
                "5-Year Integrated UG-PG in Psychology (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/images/dept/psychological_sciences/syllabus/syllabus_5_years_ug_pg_psy.pdf",
            },
          ],

          chemistry: [
            {
              title:
                "5-Year Integrated UG-PG in Chemistry (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/images/dept/chemistry/syllabus/integrated_syllabus.pdf",
            },
          ],

          mathematics: [
            {
              title:
                "5-Year Integrated UG-PG in Mathematics (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/images/dept/mathematics/syllabus/new/Syllabus_UG_PG.pdf",
            },
          ],

          statistics: [
            {
              title:
                "5-Year Integrated UG-PG in Statistics (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=344&Itemid=433",
            },
          ],

          english: [
            {
              title:
                "5-Year Integrated UG-PG in English (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/index.php?option=com_content&view=article&id=361&Itemid=451",
            },
          ],

          life_science: [
            {
              title:
                "5-Year Integrated UG-PG in Life Science (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/images/dept/life_science/syllabus/UGPGlsc_final_compressed.pdf",
            },
          ],

          geology: [
            {
              title:
                "5-Year Integrated UG-PG in Geology (Semester 1–6) Syllabus",
              url: "https://www.cusb.ac.in/images/dept/geology/syllabus/syllabus_ug_pg_geo.pdf",
            },
          ],
        },
      },

      "mahatma gandhi central university": {
        ug: {
          ba: {
            english:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/201911140548496838c502fc.pdf",
          },

          bsc: {
            chemistry: "https://www.mgcub.ac.in/student/syllabus",

            physics:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202007211543571720e13ed1.pdf",
          },
          bcom:{
            commerce:"https://www.mgcub.ac.in/student/syllabus",
          },
       bjmc:{
  bjmc_sem_1:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202508272129447d8114f946.pdf",
   bjmc_sem_3rd:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/2025082721302610f093f335.pdf",
    bjmc_sem_5:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202508272131069247e8c94f.pdf",
       },
       blib:{
blib_it:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202403122206071c6f69de4b.pdf"
       },

        bballb:{
bballb:"https://www.mgcub.ac.in/student/syllabus"
       }
        },
        

        pg: {
          ma: {
            economics:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/2023022820001645650e9308.pdf",

             education:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202009280542444dd7c72499.pdf", 

            sociology:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202306011848314297025769.pdf",
            english:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/201911140548496838c502fc.pdf",

              sanskrit:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202405081704583c29a2af51.pdf", 

             
          },
          

          msc: {
            biotechnology:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202007290648461865649ee5.pdf",

            physics:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/20200721154554533ca9e923.pdf",

            mathematics:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/20240726120950ee3727d8fd.pdf",

            zoology:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/20240726120950ee3727d8fd.pdf",

                botany:
              "https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/2022051215243824edb164cf.pdf",
          },
          mcom:{commerce:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202110110814344456e5161e.pdf"},
         
           socialwork:{
   social_work_sem_first:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/20190809081709f6a90a89ae.pdf",
        
   social_work_sem_third:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/201908090817476a730296d6.pdf",
        },
 gandhianpeacestudies:{
  gandhian_peace_studies:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/2021100623350396ac44fc73.pdf"
 },

   majmc:{
  majmc_sem_1:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/202508272129447d8114f946.pdf",
   majmc_sem_3rd:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/2025082721302610f093f335.pdf",
    
       },

       mlib:{
mlib_it:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/20240312220743015d88ba51.pdf"
       }

        },
         
        pro:{
          bba:"https://www.mgcub.ac.in/student/syllabus",
          mba:"https://www.mgcub.ac.in/storage/syllabus_attendance/attachments/201908090814290fced9cfb3.pdf",
          mca:"https://www.mgcub.ac.in/student/syllabus",
          bca:"https://www.mgcub.ac.in/student/syllabus"
        }
      },
      "nalanda university": {
        pg: {
          ma: {
            hindu_studies:
              "https://nalandauniv.edu.in/programmes/sanatana-hindu-studies-m-a/",

            world_literature:
              "https://nalandauniv.edu.in/programmes/ma-world-literature/",
            historical_studies:
              "https://nalandauniv.edu.in/admissions/?utm_source=chatgpt.com",
            buddhist_studies:
              "https://nalandauniv.edu.in/wp-content/uploads/2019/08/Curriculum-SBS.pdf",
            peace_studies: "https://nalandauniv.edu.in/academics/irps/",
            archaeology:
              "https://nalandauniv.edu.in/maarchaeology/archaelogy-course/",
            economics: "https://nalandauniv.edu.in/academics/economics/",
            hindi: "https://nalandauniv.edu.in/academics/hindi/",
          },

          msc: {
            mathematics: "https://nalandauniv.edu.in/academics/mathematics/",
          },
        },
      },
    },

    private: { 
      "amity university patna": {
        ug: {
          /* ===================== BA ===================== */
          ba: {
            history: [
              {
                title: "History ",
                url: "https://www.amity.edu/course-details.aspx?fd=D8lvJTW19oE=&cfn=gZuqzc9BUeE=",
              },
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=ihpcPId8iJT7/6wdg0M+Ag==",
              },
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=6R2pJ0h8+Kc=",
              },
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://www.amity.edu/admission/course_structure/A60182.html",
              },
            ],
            sociology: [
              {
                title: "Sociology ",
                url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=9xsk1NlJ1XY=",
              },
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://amity.edu/Admission/course_structure/A15069.html",
              },
            ],
            philosophy: [
              {
                title: "Philosophy ",
                url: "https://noida.amity.edu/ug/social-science/ba-philosophy-honours",
              },
            ],
            english: [
              {
                title: "English ",
                url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=es5TkXkbA1g=",
              },
            ],

            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/ASCO%20(Syllabus-%20Employability)/BA%20-%20JMC%203%20Continent%20JMC%20Syllabus)%202018.pdf",
              },
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://www.amity.edu/Admission/course_structure/A13085.html",
              },
            ],
          },

          /* ===================== BSC ===================== */
          bsc: {
            physics: [
              {
                title: "Physics",
                url: "https://www.amity.edu/admission/course_structure/A44557.html",
              },
            ],
            chemistry: [
              {
                title: "Chemistry",
                url: "https://www.amity.edu/admission/course_structure/A44558.html",
              },
            ],
            mathematics: [
              {
                title: "Mathematics",
                url: "https://www.amity.edu/admission/course_structure/A44556.html",
              },
            ],
            statistics: [
              {
                title: "Statistics",
                url: "https://www.amity.edu/course-details.aspx?fd=D8lvJTW19oE=&cfn=f2X2/4rj74o=",
              },
            ],
            botany: [
              {
                title: "Botany",
                url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=JaKk5O7QuBpphOXwdBVDkQ==",
              },
            ],
            zoology: [
              {
                title: "Zoology ",
                url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=92qKSOoPac0yBLXx/Cq1uA==",
              },
            ],
            geology: [
              {
                title: "Geology",
                url: "https://amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/ASEES%20(Syllabus-%20Employability)/B.Sc%20(H)%20Earth%20Sciences%20(Syllabus)%202018.pdf",
              },
            ],
            environmental_science: [
              {
                title: "Environmental Science",
                url: "https://www.amity.edu/gurugram/sdg/environmental%20science%20course.pdf",
              },
              //   { title: "Environmental Science 3rd–8th Semester", url: "" }
            ],
            computer_science: [
              {
                title: "Computer Science ",
                url: "https://www.amity.edu/course-details.aspx?fd=HMvncVYU9XU=&cfn=T/mIS5iNLnQ=",
              },
              //   { title: "Computer Science 3rd–8th Semester", url: "" }
            ],
            information_technology: [
              {
                title: "Information Technology ",
                url: "https://www.amity.edu/course-details.aspx?fd=90PDK0gVdOs=&cfn=gEkeizjl7Zg=",
              },
              //   { title: "Information Technology 3rd–8th Semester", url: "" }
            ],
            life_science: [
              {
                title: "Life Science",
                url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=Xj2xDAEU89w=",
              },
              //   { title: "Life Science 3rd–8th Semester", url: "" }
            ],
          },

          /* ===================== BCOM ===================== */
          bcom: {
            commerce: [
              {
                title: "Commerce ",
                url: "https://www.amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/ACC%20(Syllabus-%20Employability)/B.%20Com%20(Syllabus)%202018.pdf",
              },
            ],
          },
        },
        //pg
        pg: {
          /* ===================== MA ===================== */
          ma: {
            history: [
              {
                title: "History ",
                url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=XT/+nBBI/spWai9ekqFcuQ==",
              },
              //  { title: "History 3rd–4th Semester", url: "" }
            ],
            geography: [
              {
                title: "Geography ",
                url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=TKLYl4oSC+R9yA2JJve+4w==",
              },
              //  { title: "Geography 3rd–4th Semester", url: "" }
            ],
            political_science: [
              {
                title: "Political Science ",
                url: "https://www.amity.edu/admission/course_structure/A62201.html",
              },
              // { title: "Political Science 3rd–4th Semester", url: "" }
            ],
            economics: [
              {
                title: "Economics ",
                url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=+uaznC4Okfo=",
              },
              //  { title: "Economics 3rd–4th Semester", url: "" }
            ],
            sociology: [
              {
                title: "Sociology",
                url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=tLtQGToO0WM=",
              },
              //  { title: "Sociology 3rd–4th Semester", url: "" }
            ],
            psychology: [
              {
                title: "Psychology ",
                url: "https://amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/AIBAS%20(Syllabus-%20Employability)/MA%20-%20Applied%20Psychology%20(Syllabus)%202018.pdf",
              },
              //  { title: "Psychology 3rd–4th Semester", url: "" }
            ],
            philosophy: [
              {
                title: "Philosophy",
                url: "https://noida.amity.edu/ug/social-science/ba-philosophy-honours",
              },
              //  { title: "Philosophy 3rd–4th Semester", url: "" }
            ],
            english: [
              {
                title: "English ",
                url: "https://www.amity.edu/course-details.aspx?fd=o99or86MQh0=&cfn=q0JPmo7i+8o=",
              },
              //  { title: "English 3rd–4th Semester", url: "" }
            ],

            //  education: [
            //    { title: "Education 1st–2nd Semester", url: "" },
            //    { title: "Education 3rd–4th Semester", url: "" }
            //  ],
            journalism_mass_communication: [
              {
                title: "Journalism & Mass Communication ",
                url: "https://www.amity.edu/raipur/pdf/m.a%20(jmc)%20syllabus.pdf",
              },
              // { title: "Journalism & Mass Communication 3rd–4th Semester", url: "" }
            ],
            social_work: [
              {
                title: "Social Work ",
                url: "https://www.amity.edu/gurugram/naac/1.1.3%20employability%20courses%20documents/1.1.3%20syllabus%20for%20employability%20courses/aibas%20(syllabus-%20employability)/master%20of%20social%20work%20(syllabus)%202018.pdf",
              },
              // { title: "Social Work 3rd–4th Semester", url: "" }
            ],
          },

          /* ===================== MSC ===================== */
          msc: {
            physics: [
              {
                title: "Physics ",
                url: "https://www.amity.edu/course-details.aspx?fd=o99or86MQh0=&cfn=Frm1hvAmWKM=",
              },
              //  { title: "Physics 3rd–4th Semester", url: "" }
            ],
            chemistry: [
              {
                title: "Chemistry ",
                url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=ZPhT75xQ2jNQP3g+ybaV2g==",
              },
              // { title: "Chemistry 3rd–4th Semester", url: "" }
            ],
            mathematics: [
              {
                title: "Mathematics ",
                url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=LVJ/Hh4YnDo=",
              },
              //  { title: "Mathematics 3rd–4th Semester", url: "" }
            ],
            statistics: [
              {
                title: "Statistics ",
                url: "https://www.amity.edu/admission/course_structure/A44547.html",
              },
              //  { title: "Statistics 3rd–4th Semester", url: "" }
            ],

            geology: [
              {
                title: "Geology ",
                url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=EKwNgBrz7Is=&CD=EKwNgBrz7Is=",
              },
              //  { title: "Geology 3rd–4th Semester", url: "" }
            ],
            environmental_science: [
              {
                title: "Environmental Science ",
                url: "https://www.amity.edu/admission/course_structure/A112278.html",
              },
              // { title: "Environmental Science 3rd–4th Semester", url: "" }
            ],
            // computer_science: [
            //    { title: "Computer Science ", url: "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2021/11/2021113089.pdf" },
            // //   { title: "Computer Science 3rd–4th Semester", url: "" }
            //  ],
            information_technology: [
              {
                title: "Information Technology ",
                url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=1/UU6MBv5eU=",
              },
              // //   { title: "Information Technology 3rd–4th Semester", url: "" }
            ],
            // life_science: [
            //   { title: "Life Science 1st–2nd Semester", url: "" },
            //   { title: "Life Science 3rd–4th Semester", url: "" }
            // ]
          },

          /* ===================== MCOM ===================== */
          mcom: {
            commerce: [
              {
                title: "Commerce ",
                url: "https://www.amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/ACC%20(Syllabus-%20Employability)/M.%20Com%20(Syllabus)%202018.pdf",
              },
              //     { title: "Commerce 3rd–4th Semester", url: "" }
            ],
          },
        },

        //professional

        pro: {
          /* ===================== BBA ===================== */
          bba: [
            {
              title: "BBA All Semester",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=4aovqxiJ2ME=",
            },
            // { title: "BBA 3rd–4th Semester", url: "" },
            // { title: "BBA 5th–6th Semester", url: "" }
          ],

          /* ===================== BCA ===================== */
          bca: [
            {
              title: "BCA All Semester",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=Y1M51iIztTU=",
            },
            // { title: "BCA 3rd–4th Semester", url: "" },
            // { title: "BCA 5th–6th Semester", url: "" }
          ],

          /* ===================== MBA ===================== */
          mba: [
            {
              title: "MBA All Semester",
              url: "https://www.amity.edu/admission/course_structure/A01019.html",
            },
            // { title: "MBA 3rd–4th Semester", url: "" }
          ],

          /* ===================== MCA ===================== */
          mca: [
            {
              title: "MCA All Semester",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=rq3kzaCPdYSngjgUzM2Drw==",
            },
            // { title: "MCA 3rd–4th Semester", url: "" },
            // { title: "MCA 5th–6th Semester", url: "" }
          ],

          /* ===================== LLB (3 YEAR) ===================== */
          llb: [
            {
              title: "LLB ",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=zwB34yYGJHJvc/rUk+tr8w==",
            },
            //   { title: "LLB 3rd–4th Semester", url: "" },
            //   { title: "LLB 5th–6th Semester", url: "" }
          ],

          /* ===================== BA LLB (5 YEAR) ===================== */
          ba_llb: [
            {
              title: "BA LLB  ",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=twLXpHH9k4A=",
            },
            // { title: "BA LLB 3rd–4th Semester", url: "" },
            // { title: "BA LLB 5th–6th Semester", url: "" },
            // { title: "BA LLB 7th–8th Semester", url: "" },
            // { title: "BA LLB 9th–10th Semester", url: "" }
          ],

          /* ===================== B.PHARM ===================== */
          b_pharm: [
            {
              title: "B.Pharm ",
              url: "https://www.amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/AIP%20(Syllabus-%20Employability)/B%20Pharm%20Syllabus%202018.pdf",
            },
            //   { title: "B.Pharm 3rd–4th Semester", url: "" },
            //   { title: "B.Pharm 5th–6th Semester", url: "" },
            //   { title: "B.Pharm 7th–8th Semester", url: "" }
          ],

          /* ===================== B.ED ===================== */
          b_ed: [
            {
              title: "B.Ed ",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=V5UJfIDZcFM=",
            },
            // { title: "B.Ed 3rd–4th Semester", url: "" }
          ],

          /* ===================== B.SC NURSING ===================== */
          bsc_nursing: [
            {
              title: "B.Sc Nursing ",
              url: "https://www.amity.edu/gurugram/naac/1.1.3%20employability%20courses%20documents/1.1.3%20syllabus%20for%20employability%20courses/acon%20(syllabus-%20employability)/bsc%20nursing%20(syllabus)%202018.pdf",
            },
            //   { title: "B.Sc Nursing 3rd–4th Semester", url: "" },
            //   { title: "B.Sc Nursing 5th–6th Semester", url: "" },
            //   { title: "B.Sc Nursing 7th–8th Semester", url: "" }
          ],

          /* ===================== BPT ===================== */
          bpt: [
            {
              title: "BPT ",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=DUMv/5ZZyco=",
            },
            //   { title: "BPT 3rd–4th Semester", url: "" },
            //   { title: "BPT 5th–6th Semester", url: "" },
            //   { title: "BPT 7th–8th Semester", url: "" }
          ],

          /* ===================== BJMC ===================== */
          bjmc: [
            {
              title: "BJMC ",
              url: "https://amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/ASCO%20(Syllabus-%20Employability)/BA%20-%20JMC%203%20Continent%20JMC%20Syllabus)%202018.pdf",
            },
            //   { title: "BJMC 3rd–4th Semester", url: "" },
            //   { title: "BJMC 5th–6th Semester", url: "" }
          ],

          /* ===================== PG DIPLOMA ===================== */
          pg_diploma: [
            {
              title: "PG Diploma ",
              url: "https://www.amity.edu/gurugram//naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/AIBAS%20(Syllabus-%20Employability)/PGDPsychology2018.pdf",
            },
          ],
        },

        //integrated
        int: {
          geography: [
            {
              title:
                "5-Year Integrated UG-PG in Geography (Semester 1–6) Syllabus",
              url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=ihpcPId8iJT7/6wdg0M+Ag==",
            },
            {
              title:
                "5-Year Integrated UG-PG in Geography (Semester 7–10) Syllabus",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=TKLYl4oSC+R9yA2JJve+4w==",
            },
          ],

          history: [
            {
              title:
                "5-Year Integrated UG-PG in History (Semester 1–6) Syllabus",
              url: "https://www.amity.edu/lucknow/ba-hons-history",
            },
            {
              title:
                "5-Year Integrated UG-PG in History (Semester 7–10) Syllabus",
              url: "https://noida.amity.edu/pg/social-science/ma-history",
            },
          ],

          commerce: [
            {
              title:
                "5-Year Integrated UG-PG in Commerce (Semester 1–6) Syllabus",
              url: "https://www.amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/ACC%20(Syllabus-%20Employability)/B.%20Com%20(Syllabus)%202018.pdf",
            },
            {
              title:
                "5-Year Integrated UG-PG in Commerce (Semester 7–10) Syllabus",
              url: "https://www.amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/ACC%20(Syllabus-%20Employability)/M.%20Com%20(Syllabus)%202018.pdf",
            },
          ],

          economics: [
            {
              title:
                "5-Year Integrated UG-PG in Economics (Semester 1–6) Syllabus",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=012t0y/TpP4=",
            },
            {
              title:
                "5-Year Integrated UG-PG in Economics (Semester 7–10) Syllabus",
              url: "https://www.amity.edu/gurugram/naac/1.1.3%20employability%20courses%20documents/1.1.3%20syllabus%20for%20employability%20courses/abs%20(syllabus-%20employability)/m.a%20economics%20(syllabus)%202018.pdf",
            },
          ],

          political_studies_international_relations: [
            {
              title:
                "5-Year Integrated UG-PG in Political Studies & International Relations (Semester 1–6) Syllabus",
              url: "https://www.amity.edu/admission/course_structure/A62574.html",
            },
            {
              title:
                "5-Year Integrated UG-PG in Political Studies & International Relations (Semester 7–10) Syllabus",
              url: "https://www.amity.edu/admission/course_structure/A62201.html",
            },
          ],

          sociology: [
            {
              title:
                "5-Year Integrated UG-PG in Sociology (Semester 1–6) Syllabus",
              url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=9xsk1NlJ1XY=",
            },
            {
              title:
                "5-Year Integrated UG-PG in Sociology (Semester 7–10) Syllabus",
              url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=tLtQGToO0WM=",
            },
          ],

          psychology: [
            {
              title:
                "5-Year Integrated UG-PG in Psychology (Semester 1–6) Syllabus",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=RVNPd2WpsQd3OsSDA1NJGA==",
            },
            {
              title:
                "5-Year Integrated UG-PG in Psychology (Semester 7–10) Syllabus",
              url: "https://amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/AIBAS%20(Syllabus-%20Employability)/MA%20-%20Applied%20Psychology%20(Syllabus)%202018.pdf",
            },
          ],

          chemistry: [
            {
              title:
                "5-Year Integrated UG-PG in Chemistry (Semester 1–6) Syllabus",
              url: "https://www.amity.edu/admission/course_structure/A44558.html",
            },
            {
              title:
                "5-Year Integrated UG-PG in Chemistry (Semester 7–10) Syllabus",
              url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=ZPhT75xQ2jNQP3g+ybaV2g==",
            },
          ],

          mathematics: [
            {
              title:
                "5-Year Integrated UG-PG in Mathematics (Semester 1–6) Syllabus",
              url: "https://www.amity.edu/admission/course_structure/A44556.html",
            },
            {
              title:
                "5-Year Integrated UG-PG in Mathematics (Semester 7–10) Syllabus",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=LVJ/Hh4YnDo=",
            },
          ],

          statistics: [
            {
              title:
                "5-Year Integrated UG-PG in Statistics (Semester 1–6) Syllabus",
              url: "https://www.amity.edu/course-details.aspx?fd=D8lvJTW19oE=&cfn=f2X2/4rj74o=",
            },
            {
              title:
                "5-Year Integrated UG-PG in Statistics (Semester 7–10) Syllabus",
              url: "https://www.amity.edu/admission/course_structure/A44547.html",
            },
          ],

          english: [
            {
              title:
                "5-Year Integrated UG-PG in English (Semester 1–6) Syllabus",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=es5TkXkbA1g=",
            },
            {
              title:
                "5-Year Integrated UG-PG in English (Semester 7–10) Syllabus",
              url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=U6/vHZXIRao=",
            },
          ],

          // computer_science: [
          //   { title: "5-Year Integrated UG-PG in Computer Science (Semester 1–6) Syllabus", url: "https://amity.edu/patna/syllabus" },
          //   { title: "5-Year Integrated UG-PG in Computer Science (Semester 7–10) Syllabus", url: "https://amity.edu/patna/syllabus" }
          // ],

          life_science: [
            {
              title:
                "5-Year Integrated UG-PG in Life Science (Semester 1–6) Syllabus",
              url: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=Xj2xDAEU89w=",
            },
            {
              title:
                "5-Year Integrated UG-PG in Life Science (Semester 7–10) Syllabus",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=Yh48cnjd6GM=",
            },
          ],

          geology: [
            {
              title:
                "5-Year Integrated UG-PG in Geology (Semester 1–6) Syllabus",
              url: "https://amity.edu/gurugram/naac/1.1.3%20Employability%20Courses%20Documents/1.1.3%20Syllabus%20for%20Employability%20Courses/ASEES%20(Syllabus-%20Employability)/B.Sc%20(H)%20Earth%20Sciences%20(Syllabus)%202018.pdf",
            },
            {
              title:
                "5-Year Integrated UG-PG in Geology (Semester 7–10) Syllabus",
              url: "https://www.amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=EKwNgBrz7Is=",
            },
          ],
        },
      },

      //gopal narayan singh university
      "gopal narayan singh university": {
        pro: {
          bca: [
            {
              title: "BCA Syllabus ",
              url: "https://gnsu.ac.in/Syllabus/FIT/BCA_23_24__1_.pdf",
            },
          ],
          mca: [
            {
              title: "MCA Syllabus ",
              url: "https://gnsu.ac.in/Syllabus/FIT/MCA_23_24__1_.pdf",
            },
          ],
          mba: [
            {
              title: "MBA Syllabus ",
              url: "https://gnsu.ac.in/Docs/MBA-Syllabus.pdf",
            },
          ],

          bba: [
            {
              title: "BBA Syllabus ",
              url: "https://gnsu.ac.in/",
            },
          ],
          // ballb:[ {
          //   title: "BA LLB Syllabus ",
          //   url: "https://gnsu.ac.in/Syllabus/Ordinance-BALLB_.pdf",
          // }],
        },
      },

      //gopal narayan singh end

      //cv raman
      //  "dr. c.v. raman university": {
      //         ug: {
      //           /* ===================== BA ===================== */
      //           ba: {
      //             history: [
      //               {
      //                 title: "History ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-arts-ba-in-histroy",
      //               },
      //             ],
      //             geography: [
      //               {
      //                 title: "Geography ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-arts-ma-in-geography",
      //               },
      //             ],
      //             political_science: [
      //               {
      //                 title: "Political Science ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-arts-in-political-science",
      //               },
      //             ],
      //             economics: [
      //               {
      //                 title: "Economics ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-arts-in-economics",
      //               },
      //             ],
      //             sociology: [
      //               {
      //                 title: "Sociology ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-arts-in-sociology",
      //               },
      //             ],

      //           },

      //           /* ===================== BSC ===================== */
      //           bsc: {
      //             physics: [
      //               {
      //                 title: "Physics",
      //                 url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-science-4",
      //               },
      //             ],
      //             chemistry: [
      //               {
      //                 title: "Chemistry",
      //                 url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-science-in-chemistry",
      //               },
      //             ],
      //             mathematics: [
      //               {
      //                 title: "Mathematics",
      //                 url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-science-in-mathematics",
      //               },
      //             ],

      //           },

      //           /* ===================== BCOM ===================== */
      //           bcom: {
      //             commerce: [
      //               {
      //                 title: "Commerce ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-commerce-bcom",
      //               },
      //             ],
      //           },
      //         },
      //         //pg
      //         pg: {
      //           /* ===================== MA ===================== */
      //           ma: {
      //             history: [
      //               {
      //                 title: "History ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-artsma-in-history",
      //               },
      //               //  { title: "History 3rd–4th Semester", url: "" }
      //             ],
      //             geography: [
      //               {
      //                 title: "Geography ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-arts-ma-in-geography",
      //               },
      //               //  { title: "Geography 3rd–4th Semester", url: "" }
      //             ],
      //             political_science: [
      //               {
      //                 title: "Political Science ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-arts-in-political-science",
      //               },
      //               // { title: "Political Science 3rd–4th Semester", url: "" }
      //             ],
      //             economics: [
      //               {
      //                 title: "Economics ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-arts-in-economics",
      //               },
      //               //  { title: "Economics 3rd–4th Semester", url: "" }
      //             ],
      //             sociology: [
      //               {
      //                 title: "Sociology",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-arts-in-sociology",
      //               },
      //               //  { title: "Sociology 3rd–4th Semester", url: "" }
      //             ],

      //             social_work: [
      //               {
      //                 title: "Social Work ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-social-work-msw",
      //               },
      //               // { title: "Social Work 3rd–4th Semester", url: "" }
      //             ],
      //           },

      //           /* ===================== MSC ===================== */
      //           msc: {
      //             physics: [
      //               {
      //                 title: "Physics ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-post-graduate-in-science",
      //               },
      //               //  { title: "Physics 3rd–4th Semester", url: "" }
      //             ],
      //             chemistry: [
      //               {
      //                 title: "Chemistry ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-science-in-chemistry",
      //               },
      //               // { title: "Chemistry 3rd–4th Semester", url: "" }
      //             ],
      //             mathematics: [
      //               {
      //                 title: "Mathematics ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-science-in-mathematics",
      //               },
      //               //  { title: "Mathematics 3rd–4th Semester", url: "" }
      //             ],

      //           },

      //           /* ===================== MCOM ===================== */
      //           mcom: {
      //             commerce: [
      //               {
      //                 title: "Commerce ",
      //                 url: "https://cvrubihar.ac.in/courses/prog-master-of-commerce-mcom",
      //               },
      //               //     { title: "Commerce 3rd–4th Semester", url: "" }
      //             ],
      //           },
      //         },

      //         //professional

      //         pro: {
      //           /* ===================== BBA ===================== */
      //           bba: [
      //             {
      //               title: "BBA All Semester",
      //               url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-business-administration-bba",
      //             },
      //             // { title: "BBA 3rd–4th Semester", url: "" },
      //             // { title: "BBA 5th–6th Semester", url: "" }
      //           ],

      //           /* ===================== BCA ===================== */
      //           bca: [
      //             {
      //               title: "BCA All Semester",
      //               url: "https://cvrubihar.ac.in/courses/prog-bachelor-of-computer-application-bca",
      //             },
      //             // { title: "BCA 3rd–4th Semester", url: "" },
      //             // { title: "BCA 5th–6th Semester", url: "" }
      //           ],

      //           /* ===================== MBA ===================== */
      //           mba: [
      //             {
      //               title: "MBA All Semester",
      //               url: "https://cvrubihar.ac.in/courses/prog-master-of-business-administration-mba",
      //             },
      //             // { title: "MBA 3rd–4th Semester", url: "" }
      //           ],

      //           /* ===================== MCA ===================== */
      //           mca: [
      //             {
      //               title: "MCA All Semester",
      //               url: "https://cvrubihar.ac.in/courses/prog-master-of-science-in-information-technology-msc-in-it",
      //             },
      //             // { title: "MCA 3rd–4th Semester", url: "" },
      //             // { title: "MCA 5th–6th Semester", url: "" }
      //           ],

      //         },

      //       },

      //cv raman end
    },


   
  },
};

/* ===== FORM SUBMIT ===== */

app.post("/submit", (req, res) => {
  const { email, state, universityType, university, course, program, subject } =
    req.body;

  const st = state?.toLowerCase().trim();

  let ut = universityType?.toLowerCase().trim();
  if (ut === "all") {
    ut = ["state", "private", "central"];
  }

  const un = university?.toLowerCase()
    .replace(/,/g, "")
    .replace(/’/g, "'")
    .replace(/\s+/g, " ")
    .trim();

  const c = course?.toLowerCase().includes("professional")
    ? "pro"
    : course?.toLowerCase().includes("under")
      ? "ug"
      : course?.toLowerCase().includes("post")
        ? "pg"
        : course?.toLowerCase().trim();

  const p = program?.toLowerCase().trim();

  const s = subject
    ?.toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/\s+/g, "_");

  const uniType = universityType?.toLowerCase().includes("central")
    ? "central"
    : universityType?.toLowerCase().includes("private")
      ? "private"
      : universityType?.toLowerCase().includes("state")
        ? "state"
        : universityType?.toLowerCase().includes("deemed")
          ? "deemed"
          : universityType?.toLowerCase().includes("government")
            ? "government"
            : universityType?.toLowerCase().trim();
  let linkData = null;
  if (c === "pro") {
    linkData = SYLLABUS_LINKS?.[st]?.[uniType]?.[un]?.pro?.[p] || null;
  } else if (c === "int") {
    linkData = SYLLABUS_LINKS?.[st]?.[uniType]?.[un]?.int?.[s] || null;
  } else {
    linkData = SYLLABUS_LINKS?.[st]?.[uniType]?.[un]?.[c]?.[p]?.[s] || null;
  }

  console.log("STATE:", st);
  console.log("TYPE:", uniType);
  console.log("UNIVERSITY:", un);
  console.log("COURSE:", c);
  console.log("PROGRAM:", p);
  console.log("SUBJECT:", s);
  console.log("FOUND LINK:", linkData);

  /* ADMIN EMAIL */
  transporter.sendMail({
    from: "Syllabus Form <contactsocialmanish@gmail.com>",
    to: "contactsocialmanish@gmail.com",
    subject: "New Syllabus Lead",
    text: JSON.stringify(req.body, null, 2),
  });

  /* USER EMAIL */
  if (email) {
    transporter.sendMail({
      from: "Syllabus Team <contactsocialmanish@gmail.com>",
      to: email,
      subject: "Thank You for Your Submission",
      html: `
        <h3>Thank you for submitting the syllabus form.</h3>
        <p>Please Contact : <b>+91 8789577123</b></p>
        ${
          Array.isArray(linkData)
            ? linkData
                .map(
                  (l) =>
                    `<p><a href="${l.url}" target="_blank">${l.title}</a></p>`,
                )
                .join("")
            : linkData
              ? `<p><a href="${linkData}" target="_blank">Click here to view your syllabus</a></p>`
              : `<p>Syllabus link will be shared shortly.</p>`
        }
      `,
    });
  }

  res.json({
    success: true,
    redirectUrl: `http://localhost:3000/thankyou?link=${encodeURIComponent(
      JSON.stringify(linkData || ""),
    )}`,
  });
});

/* ===== THANK YOU PAGE ===== */
app.get("/thankyou", (req, res) => {
  const link = req.query.link
    ? JSON.parse(decodeURIComponent(req.query.link))
    : null;

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Thank You</title>
      <style>
        body{
          margin:0;
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#f4f7ff;
          font-family:Segoe UI,sans-serif;
        }
        .card{
          background:#fff;
          padding:30px;
          border-radius:16px;
          box-shadow:0 20px 50px rgba(0,0,0,.2);
          text-align:center;
          max-width:420px;
        }
        a{
          display:block;
          margin-top:12px;
          padding:10px;
          background:#0044cc;
          color:#fff;
          text-decoration:none;
          border-radius:8px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h2>✅ Thank You</h2>
        <p>Your form has been submitted successfully.</p>
        <p>Please Contact : <b>+91 8789577123</b></p>
        ${
          Array.isArray(link)
            ? link
                .map(
                  (l) => `<a href="${l.url}" target="_blank">📘 ${l.title}</a>`,
                )
                .join("")
            : link
              ? `<a href="${link}" target="_blank">📘 View Your Syllabus</a>`
              : `<p>Syllabus link not available</p>`
        }
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
