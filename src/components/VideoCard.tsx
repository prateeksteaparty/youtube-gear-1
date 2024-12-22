import {useRouter} from 'next/router'

export function VideoCard(props:any)
{
   const router = useRouter();

   const handleRedirect = () =>[
    router.push('/NextPage')
   ]
    return(
        <div onClick={handleRedirect} className="p-2 cursor-pointer">
       <img className="w-80 aspect-rectangle rounded-md " src={props.image} alt="" />
          <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className=" rounded-full w-10 h-10 " src={props.thumbImg} alt="" />
                </div>
                <div className="col-span-11 pl-1 ">
                  {props.title}
                     <div className="col-span-11  text-gray-400 text-sm">
                        {props.author}
                     </div>
                     <div className="col-span-11  text-gray-400 text-sm">
                       {props.views} • {props.timestamp}
                     </div>
                </div>
            </div>
        </div>

    )
}

