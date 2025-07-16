import { projectInfo } from '@/data/projectData';

export default {
	info: {
		name: '한솔',
		email: 'hansol13084@gmail.com',
		phone: '010-9438-2573',
		address: '인천광역시 부평구',
		url: 'https://github.com/sound0-07',
	},

	home: {
		title: '안녕하세요😆\n 한솔입니다.',
	},
	header: {
		home: '홈',
		about: '소개',
		projects: '프로젝트',
		contact: '문의하기',
	},
	footer: {
		copyright: '© Han Sol.',
		email: '이메일',
		phone: '전화번호',
		address: '주소',
		url: 'GitHub',
	},

	// page
	about: {
		title: '소개',
		overview: {
			title: '소개',
			description:
				'다양한 프로젝트를 통해 웹서비스 개발의 경험을 쌓으면서\n프론트엔드 개발자의 커리어를 쌓기 위해 노력하고 있습니다.',
			button: '자세히 보기',
		},
		history: {
			title: '경력',
			company: [
				{
					name: '모프인터랙티브 | 개발팀 주임',
					date: '2022.06.27 ~ 현재 재직중',
				},
			],
			timeline: projectInfo.map(project => ({
				date: project.date,
				title: project.name,
				description: project.subName,
			})),
		},
		skill: {
			title: '사용 기술',
			list: [
				{
					skill: 'React, Next.js, Typescript',
					description: 'FE 웹서비스 개발',
				},
				{
					skill: 'GitHub, GitHub Actions',
					description: '코드 관리, CI/CD',
				},
				{
					skill: 'Figma, Zeplin',
					description: '디자인 협업 도구',
				},
				{
					skill: 'Jira, Google Sheets',
					description: '프로젝트 이슈 관리',
				},
				{
					skill: 'Confluence, Outline',
					description: '개발 문서 관리',
				},
			],
		},
		certificate: {
			title: '자격증',
			list: [
				{
					date: '2025.04',
					title: 'SQLD',
					description: '한국데이터산업진흥원',
				},
				{
					date: '2024.12',
					title: '정보처리기사',
					description: '한국산업인력공단',
				},
			],
		},
		hobby: {
			title: '취미',
			list: [
				{
					name: '클라이밍',
					description: '상체 근력 향상',
				},
				{
					name: '수영',
					description: '지구력 향상',
				},
				{
					name: '게임',
					description: '스트레스 해소 및 다양한 경험',
				},
			],
		},
	},
	projects: {
		title: '프로젝트',
		overview: {
			title: '프로젝트 소개',
			description:
				'Typescript 기반으로 React 또는 Next.js\n프레임워크를 활용해 웹 서비스를 개발했습니다.',
			button: '자세히 보기',
		},
		list: projectInfo,
	},
	contact: {
		title: '문의하기',
		overview: {
			title: 'Call Me!',
			description: '언제나 연락주세요!',
			button: '문의하기',
		},
	},
};
