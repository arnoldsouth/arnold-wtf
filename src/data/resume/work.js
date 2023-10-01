/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Freelance',
    position: 'Full Stack Web Developer',
    url: 'https://arnold.wtf',
    startDate: '2022-01-01',
    summary: ``,
    highlights: [
      // 'Built and maintained web applications using React, Node, and Express',
      // 'Integrated third-party APIs to enable dynamic data flow',
      // 'Utilized MongoDB for data storage and retrieval',
      // 'Implemented responsive and user-friendly interfaces using HTML and CSS',
    ],
  },
  {
    name: 'Curology',
    position: 'Senior Accountant',
    url: 'http://curology.com',
    startDate: '2019-01-01',
    endDate: '2021-07-01',
    summary: ``,
    highlights: [
      // 'Partnered directly with our supply chain, warehouse operations, and BizOps team members by creating, developing, and implementing new cost accounting and inventory management systems, processes, and policies',
      // 'Performed and managed month-end close activities for inventory, COGS, fixed assets, AP, and AR, including journal entries, account reconciliations, and roll-forwards with a focus on reducing days to close',
    ],
  },
  {
    name: 'Grant Thornton',
    position: 'Senior Audit Associate',
    url: 'https://grantthornton.com',
    startDate: '2016-09-01',
    endDate: '2019-01-01',
    summary: ``,
    highlights: [
      // 'Planned, executed, and completed financial statement audits while managing the audit engagement’s budget',
      // 'Worked with the team to design audit procedures using the company’s audit tools and technology',
      // 'Developed and maintained positive relationships with clients, colleagues, and stakeholders',
      // 'Trained and supervised audit associates and interns, providing consistent, regular feedback',
    ],
  },
];

export default work;
