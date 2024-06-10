export const SkeletonGroups = () => {
    return (
        <div className={"flex flex-col gap-[20px] ml-[100px] mr-[100px]"}>
            <div className={"flex gap-[10px] w-fit overflow-auto"}>
                <div className={"bg-background-highlight w-[230px] h-[70px] rounded-[30px]"}/>
                <div className={"bg-background-highlight w-[320px] h-[70px] rounded-[30px]"}/>
                <div className={"bg-background-highlight w-[260px] h-[70px] rounded-[30px]"}/>
                <div className={"bg-background-highlight w-[200px] h-[70px] rounded-[30px]"}/>
                <div className={"bg-background-highlight w-[270px] h-[70px] rounded-[30px]"}/>
            </div>
            <div className={"flex gap-[10px] w-fit overflow-auto pl-[50px] pe-[50px]"}>
                <div className={"bg-background-highlight w-[270px] h-[60px] rounded-[30px]"}/>
                <div className={"bg-background-highlight w-[180px] h-[60px] rounded-[30px]"}/>
                <div className={"bg-background-highlight w-[230px] h-[60px] rounded-[30px]"}/>
                <div className={"bg-background-highlight w-[230px] h-[60px] rounded-[30px]"}/>
                <div className={"bg-background-highlight w-[200px] h-[60px] rounded-[30px]"}/>
            </div>
        </div>
    )
}