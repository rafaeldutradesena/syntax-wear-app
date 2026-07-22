export const SubscriptionForm = () => {
    return (
        <form className="flex flex-col">
            <label htmlFor="newsLetter">Inscreva-se em nosso e-mail</label>
            <input 
            type="email" 
            id="newsletter"
            name="newsletter" 
            placeholder="email@gmail.com" 
            className="rounded-[30px] bg-white py-3 px-5 placeholder-[#aaaaaa] text-[#aaaaaa]"
            />
        </form>
    )
}