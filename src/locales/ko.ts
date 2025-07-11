import { projectInfo } from '@/data/projectData';

export default {
	info: {
		name: '한솔',
		email: 'hansol13084@gmail.com',
		phone: '010-9438-2573',
		address: '인천광역시 부평구',
	},

	home: {
		//title: '안녕하세요😆\n 프론트엔드 개발자 한솔입니다.',
		title: '안녕하세요😆',
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
	},

	// page
	about: {
		title: '소개',
		overview: {
			//title: '3년간 개발 근무 경험',
			title: '소개',
			description:
				'게임 개발 업무를 진행하다가 현재는 프론트엔드 개발자로 일하고 있습니다.',
			button: '자세히 보기',
		},
		history: {
			title: '경력',
			timeline: projectInfo.map(project => ({
				date: project.date,
				title: project.name,
				description: project.subName,
			})),
		},
		skill: {
			title: '기술 스택',
			description: '기술 스택 소개',
		},
		certificate: {
			title: '자격증',
			list: [
				{
					date: '2024.12',
					title: '정보처리기사',
					description: '한국산업인력공단',
				},
				{
					date: '2025.04',
					title: 'SQLD',
					description: '한국데이터산업진흥원',
				},
			],
		},
		hobby: {
			title: '취미',
			description: '취미 소개',
		},
	},
	projects: {
		title: '프로젝트',
		overview: {
			title: '프로젝트 소개',
			description:
				'Unity를 사용하여 게임을 개발하였고 React를 사용하여 웹 서비스를 개발하였습니다.',
			button: '자세히 보기',
		},
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
