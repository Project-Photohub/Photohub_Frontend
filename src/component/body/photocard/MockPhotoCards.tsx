import {PhotoCards} from "./PhotoCards";
import {useState} from "react";

export const MockPhotoCards = () => {

    const [modal, setModal] = useState<JSX.Element>();

    return (<>
            {PhotoCards(
                {
                    photoCardProps: [
                        {
                            id: "1",
                            image: "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
                            backImage: "https://i.namu.wiki/i/ySN6jsWom0OpODZ2rZyLgA9O8yPP9iebPI4K3MBz_3dMfKUGmFDg7W76M3lmMZ8-w46NNI7ScUqPqMBzGOukTQ.webp",
                            name: "맹맹",
                            groupName: "QWER",
                            memberName: "쵸단",
                            memberNickname: "Q",
                            createdAt: "2024.05.01",
                            likeCount: 20010130
                        },
                        {
                            id: "2",
                            image: "https://i.namu.wiki/i/zLk8ZiuYBugEFtxw-LXPGHId6guONESIQAK3An_deYLj7kgFu9YcbxXE821E9oAjRV5I1pQcfULek4nSR5Af_g.webp",
                            backImage: "https://i.namu.wiki/i/ySN6jsWom0OpODZ2rZyLgA9O8yPP9iebPI4K3MBz_3dMfKUGmFDg7W76M3lmMZ8-w46NNI7ScUqPqMBzGOukTQ.webp",
                            name: "젠제날티",
                            groupName: "QWER",
                            memberName: "마젠타",
                            memberNickname: "W",
                            createdAt: "2024.05.01",
                            likeCount: 20010130
                        },
                        {
                            id: "3",
                            image: "https://i.namu.wiki/i/HBwXxYSDrC8MuWQh54yPmIIT1ChB8-IqTk5AT7ss7hHJfC56U79LEO_Sc-r55UUXmJLP7tySiQ9sHc90NBSPcg.webp",
                            backImage: "https://i.namu.wiki/i/ySN6jsWom0OpODZ2rZyLgA9O8yPP9iebPI4K3MBz_3dMfKUGmFDg7W76M3lmMZ8-w46NNI7ScUqPqMBzGOukTQ.webp",
                            name: "나의 사랑, 오 그대여.",
                            groupName: "QWER",
                            memberName: "히나",
                            memberNickname: "E",
                            createdAt: "2024.05.01",
                            likeCount: 20010130
                        },
                        {
                            id: "4",
                            image: "https://i.namu.wiki/i/WBo-tbVSFFOCdQeaWV4DNoYs9a_prq-M3LhAB_MMaZGYkiFvnx3_a519EC-fTvKn94jUo1tESEIewEdEs2hlyA.webp",
                            backImage: "https://i.namu.wiki/i/ySN6jsWom0OpODZ2rZyLgA9O8yPP9iebPI4K3MBz_3dMfKUGmFDg7W76M3lmMZ8-w46NNI7ScUqPqMBzGOukTQ.webp",
                            name: "너를 좋아한다 좋아해~",
                            groupName: "QWER",
                            memberName: "이시연",
                            memberNickname: "R",
                            createdAt: "2024.05.01",
                            likeCount: 20010130
                        },
                        {
                            id: "5",
                            image: "https://edgio.haerin.network/static/image/b5a92340dbb27d6977f470f3264169bc5c84fa7ff531db55dfc38a9f0beab545.jpg",
                            backImage: "https://edgio.haerin.network/static/image/b5a92340dbb27d6977f470f3264169bc5c84fa7ff531db55dfc38a9f0beab545.jpg",
                            name: "해린눈나야~",
                            groupName: "NewJeans",
                            memberName: "해린",
                            memberNickname: "해린눈나",
                            createdAt: "2024.05.01",
                            likeCount: 20010130
                        },
                        {
                            id: "6",
                            image: "https://i.namu.wiki/i/sp-ZZnG25jiGC9TlebacEjjCVT3V346cVkDuFRg1H399h28aWeqnxQpweOX69I8xOWoGyappXXSgKRVR3LRdDA.webp",
                            backImage: "https://i.namu.wiki/i/ySN6jsWom0OpODZ2rZyLgA9O8yPP9iebPI4K3MBz_3dMfKUGmFDg7W76M3lmMZ8-w46NNI7ScUqPqMBzGOukTQ.webp",
                            name: "나의 사랑, 오 그대여.",
                            groupName: "QWER",
                            memberName: "히나",
                            memberNickname: "E",
                            createdAt: "2024.05.01",
                            likeCount: 20010130
                        }
                    ]
                },
                (value: JSX.Element | undefined) => {
                    setModal(value)
                })}
            {modal && modal}
        </>
    )
}