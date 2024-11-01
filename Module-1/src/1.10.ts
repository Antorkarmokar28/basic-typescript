{
    //
    // union type
    type FrontendDeveloper1 = 'fakibaji Developer' | 'Junior Developer';

    const frontendDeveloper: FrontendDeveloper1 = 'Junior Developer'
    type Student = {
        id: number;
        name: string;
        gendar: 'male' | 'female';
        address: string;
    }
    const student: Student = {
        id: 1201,
        name: 'Antor Karmoker',
        gendar: 'male',
        address: 'Tangail'
    }
    // intersection type
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer';
    }
    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
    const fullStackDeveloper:FullStackDeveloper = {
        skills: ['html', 'css', 'javascript', 'node', 'express'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer',
    }
    //
}

