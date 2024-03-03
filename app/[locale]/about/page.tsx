import { SecondBlock } from '@/app/modules/About/SecondBlock/SecondBlock'
import { TopBanner } from '@/app/modules/About/TopBanner/TopBanner'
import { Application } from '@/app/modules/Application/Application'

export default function about() {
    return (
        <>
            <TopBanner />
            <SecondBlock />
            <Application />
        </>
    )
}
