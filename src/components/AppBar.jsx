import { SearchBar } from "./SearchBar"
import {Listen} from "./Listen"
import {Create} from "./Create"
import {Notification} from "./Notification"
import {SignIN} from "./SignIN"
import {YTlogo, YTlogoLogo} from "./YTlogo"


export const AppBar = () =>{

    return (
        <div className="flex justify-center grid grid-cols-5 h-16 ">
            <div className="text-md inline-flex items-center col-span-1">
                <YTlogo></YTlogo>
            </div>
            <div className="flex justify-center col-span-3 space-x-3">
                <SearchBar></SearchBar>
                <Listen></Listen>
            </div>
            <div className="col-span-1 pl-20 text-md inline-flex items-center flex justify-center space-x-6">
                <Create></Create>
                <Notification></Notification>
                <SignIN></SignIN>
            </div>

        </div>
    )
}