const fs = require('fs');

const pages = [
    {
        id: 'clinical-governance',
        title: 'Clinical Governance',
        desc: 'Ensuring standards of care and continuous improvement.',
        text: 'Clinical governance is the framework through which healthcare organizations are accountable for continuously improving the quality of their services and safeguarding high standards of care. In the Cath Lab, this involves rigorous clinical audits, evidence-based practice implementation, risk management, and fostering an environment of continuous learning and accountability.'
    },
    {
        id: 'operational-management',
        title: 'Operational Management',
        desc: 'Optimizing day-to-day cath lab workflow and efficiency.',
        text: 'Effective operational management is critical to the daily success of the Cath Lab. This encompasses scheduling, staff allocation, workflow optimization, and ensuring that all equipment is functioning correctly. A focus on operational efficiency minimizes patient wait times, maximizes throughput, and maintains a calm, structured environment for both patients and clinical staff.'
    },
    {
        id: 'quality-improvement',
        title: 'Quality Improvement',
        desc: 'Driving excellence through evidence-based practice.',
        text: 'Quality improvement initiatives in the Cath Lab focus on systematic, data-driven efforts to improve patient outcomes and system performance. By continuously evaluating our procedures, analyzing patient feedback, and adopting the latest technological and methodological advancements, we strive to elevate the standard of care and deliver superior cardiovascular outcomes.'
    },
    {
        id: 'resource-control',
        title: 'Resource & Financial Control',
        desc: 'Strategic budget management and resource allocation.',
        text: 'Managing a Cath Lab requires acute financial stewardship and strategic resource allocation. This involves overseeing the budget, managing supply chains, optimizing the use of high-cost consumables, and negotiating with vendors. Sound financial control ensures that the lab remains economically viable while continuing to provide state-of-the-art care to our patients.'
    },
    {
        id: 'strategic-development',
        title: 'Strategic Development',
        desc: 'Planning for future growth and technological advancement.',
        text: 'Strategic development involves looking beyond day-to-day operations to plan for the future of the Cath Lab. This includes assessing new cardiovascular technologies, expanding service lines, developing business cases for capital equipment, and aligning the lab’s goals with the broader strategic objectives of the hospital and healthcare system.'
    },
    {
        id: 'leadership',
        title: 'Leadership',
        desc: 'Inspiring and guiding multidisciplinary teams.',
        text: 'Leadership in the Cath Lab requires guiding a highly skilled, multidisciplinary team of cardiologists, nurses, radiographers, and physiologists. A strong leader fosters a culture of collaboration, mutual respect, and high performance. By mentoring staff, resolving conflicts, and communicating a clear vision, leadership ensures the team remains motivated and cohesive under pressure.'
    },
    {
        id: 'patient-safety',
        title: 'Patient Safety',
        desc: 'Prioritizing safe environments and risk management.',
        text: 'Patient safety is the cornerstone of all Cath Lab activities. This domain focuses on minimizing risks, preventing adverse events, and maintaining a culture where safety is prioritized above all else. From strict adherence to infection control protocols to rigorous pre-procedure checklists and radiation safety, every protocol is designed to protect our patients during complex interventions.'
    }
];

const template = (p) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${p.title} - Cath Lab Leadership</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        .page-content {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
            border-radius: 15px;
            padding: 3rem;
            max-width: 800px;
            margin: 0 auto;
            text-align: left;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            animation: fadeIn 0.8s ease forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        @keyframes fadeIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .page-content h1 {
            color: var(--highlight);
            margin-bottom: 1rem;
        }
        .page-content h3 {
            color: #fff;
            margin-bottom: 2rem;
            font-weight: 400;
        }
        .page-content p {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            color: #e0e1dd;
        }
        .back-btn {
            display: inline-block;
            padding: 10px 20px;
            background: transparent;
            color: var(--text-color);
            border: 1px solid var(--highlight);
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        .back-btn:hover {
            background: var(--highlight);
            color: var(--primary-color);
        }
    </style>
</head>
<body>
    <div class="background-overlay"></div>
    <div class="container" style="justify-content: center; min-height: 100vh;">
        <div class="page-content">
            <h1>\${p.title}</h1>
            <h3>\${p.desc}</h3>
            <p>\${p.text}</p>
            <a href="index.html" class="back-btn">&larr; Back to Portfolio</a>
        </div>
    </div>
</body>
</html>`;

pages.forEach(p => {
    fs.writeFileSync(p.id + '.html', template(p));
});

console.log('Pages generated successfully!');
