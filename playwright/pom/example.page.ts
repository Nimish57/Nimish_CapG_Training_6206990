class Example{
    usernameTF:string;
    passwordTF:string;
    SubmitBtn:any;
    constructor(page){
        this.usernameTF=page.locator('#username')
        this.passwordTF=page.locator('#password')
        this.SubmitBtn=page.locator('#submit')
    }
    async username(name){
        await this.usernameTF.fill(name)
    }
    async password(imps){
        await this.passwordTF.fill(imps)
    }
    async submit(sub){
        await this.SubmitBtn.click()
    }
}
export default Example