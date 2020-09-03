import OneModelContainer from "../../../components/OneModel/OneModelContainer";
import { useRouter } from 'next/router';
import { getCarAPI } from "../../api/api";
import NoDataOneModel from "../../../components/OneModel/NoDataOneModel";

export default function Vendor({ oneModelData }) {
    const router = useRouter();
    const vendorCarParam = router.query.vendor.split(' ').join('');
    const modelParam = router.query.model.split(' ').join('');

    return (
        <>
                <div className="containerMain">
                    <div className="resultBlock">
                        {oneModelData == 'error' ? <NoDataOneModel
                            vendorCarParam={vendorCarParam}
                            modelParam={modelParam} />
                            : <OneModelContainer
                                oneModelData={oneModelData}
                                vendorCarParam={vendorCarParam}
                                modelParam={modelParam}
                                oneModelData={oneModelData}
                            />}
                    </div>
                </div>
        </>
    )
}

Vendor.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return { oneModelData: null }
    }
    try {
        const response = await getCarAPI.byModel(query.vendor, query.model);
        return {
            oneModelData: response.data
        }
    } catch (e) {
        return {
            oneModelData: 'error'
        }
    }
}