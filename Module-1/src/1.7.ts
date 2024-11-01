//learn spread operator
const friends1: string[] = ['Kanon', 'Rumon', 'Bipu', 'Rifat'];
const friends2: string[] = ['Shakil', 'Bishow', 'Monir', 'Nazmul'];

friends1.push(...friends2);

const mentors1 = {
    mezbaul: 'Typescript',
    firoz: 'GraphQL Pro',
    mir: 'redux',
}

const mentors2 = {
    tonmay: 'next js',
    rahatul: 'Job placement',
    ravi: 'AWS & Docker'
}

const allMentors = {
    ...mentors1,
    ...mentors2
}

//learn rest operator
function greetFriends(...friends: string[]){
    friends.forEach((friend: string) => console.log(`Hi ${friend}`))
}
greetFriends('safin', 'bipu', 'kanon', 'bishow')