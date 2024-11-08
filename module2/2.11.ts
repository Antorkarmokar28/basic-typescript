{
    //Utility types
    type UserInfo = {
        id: number;
        name: string;
        email?: string;
        contactNo: string;
    };
    // Pick
    type GetIdOrName = Pick<UserInfo, "id" | 'name'>;
    // Omit
    type OutIdOrNumber = Omit<UserInfo, 'id' | 'name'>;
    // Required
    type RequiredUserInfo = Required<UserInfo>;
    // Partial
    type OptionalUserInfo = Partial<UserInfo>;

    // ReadOnly
    type ReadOnlyUserInfo = Readonly<UserInfo>;
    const unserInfo: ReadOnlyUserInfo = {
        id: 155,
        name: 'Antor Karmaker',
        email: 'karmokarantor@gmail.com',
        contactNo: '01700000000'
    }
    
    // Record
    type MyObj = Record<string, string>
    const RecordUserInfo:MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd',
    };

    //
}