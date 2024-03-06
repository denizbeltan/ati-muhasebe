// import { useIntl } from 'react-intl'
import { HtmlMenuItemWithSub } from './HtmlMenuItemWithSub'
import { HtmlMenuItem } from './HtmlMenuItem'

export function HtmlMenuMain() {
    // const intl = useIntl()

    return (
        <>
            {/* <!--begin:Menu item--> */}
            <div className="menu-item pt-5">
                {/* <!--begin:Menu content--> */}
                <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">KONTROL PANELİ SAYFALARI</span>
                </div>
                {/* <!--end:Menu content--> */}
            </div>
            {/* <!--end:Menu item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator mx-10"></div>
            {/* <!--end::Separator--> */}
            <HtmlMenuItemWithSub
                to='/guncel'
                title='Güncel Durum'
                fontIcon='bi-archive'
                icon='element-1'
            >
                <HtmlMenuItem to='/pages/guncel/guncel-durum' title='Güncel Durum' hasBullet={true} />
                <HtmlMenuItem to='/pages/guncel/stok-akisi' title='Stok Akışı' hasBullet={true} />
            </HtmlMenuItemWithSub>
            <HtmlMenuItemWithSub
                to='/crafted/pages'
                title='Satış Yönetimi'
                fontIcon='bi-archive'
                icon='chart-line'
            >
                <HtmlMenuItem to='/pages/satis-yon/fatura' title='Satış Faturaları' hasBullet={true} />
                <HtmlMenuItem to='/pages/satis-yon/irsaliye' title='Satış İrsaliyeleri'hasBullet={true}  />
                <HtmlMenuItem to='/pages/satis-yon/siparis' title='Alınan Siparişler' hasBullet={true} />
                <HtmlMenuItem to='/pages/satis-yon/proform' title='Satış Proformları/Teklifler' hasBullet={true} />
            </HtmlMenuItemWithSub>
            <HtmlMenuItemWithSub
                to='/crafted/pages'
                title='Satın Alma Yönetimi'
                fontIcon='bi-archive'
                icon='chart-line-star'
            >
                <HtmlMenuItem to='/pages/satin-alma-yon/alis-fatura' title='Alış Faturaları' hasBullet={true} />
                <HtmlMenuItem to='/pages/satin-alma-yon/alis-irsaliye' title='Alış İrsaliyeleri' hasBullet={true} />
                <HtmlMenuItem to='/pages/satin-alma-yon/verilen-siparis' title='Verilen Siparişler' hasBullet={true} />
        
            </HtmlMenuItemWithSub>
            <HtmlMenuItemWithSub
                to='/crafted/pages'
                title='Genel Gider Yönetimi'
                fontIcon='bi-archive'
                icon='chart-line-down-2'
            >
                <HtmlMenuItem to='/pages/gider-yon/gider' title='Genel Gider' hasBullet={true} />
                <HtmlMenuItem to='/pages/gider-yon/genel-tip' title='Genel Gider Tipler' hasBullet={true} />
            </HtmlMenuItemWithSub>
            <HtmlMenuItemWithSub
                to='/crafted/pages'
                title='Ürün ve Hizmetler'
                fontIcon='bi-archive'
                icon='folder'
            >
                <HtmlMenuItem to='/pages/hizmet/tumu' title='Tümü' hasBullet={true} />
                <HtmlMenuItem to='/pages/hizmet/urunler' title='Ürünler' hasBullet={true} />
            </HtmlMenuItemWithSub>
            <HtmlMenuItemWithSub
                to='/crafted/pages'
                title='Cari Hesapları'
                fontIcon='bi-archive'
                icon='chart-pie-3'
            >
                <HtmlMenuItem to='/pages/cari/cari-genel' title='Genel Cariler' hasBullet={true} />
                <HtmlMenuItem to='/pages/cari/potansiyel-mus' title='Potansiyel Müşteriler' hasBullet={true} />
                <HtmlMenuItem to='/pages/cari/personel-cari' title='Personel Carileri' hasBullet={true} />
                <HtmlMenuItem to='/pages/cari/ortaklar' title='Ortaklar' hasBullet={true} />
            </HtmlMenuItemWithSub>
            <HtmlMenuItemWithSub
                to='/crafted/pages'
                title='Finans'
                fontIcon='bi-archive'
                icon='finance-calculator'
            >
                <HtmlMenuItem to='/pages/finans/banka-hesap' title='Banka Hesapları' hasBullet={true} />
                <HtmlMenuItem to='/pages/finans/kasalar' title='Kasalar' hasBullet={true} />
                <HtmlMenuItem to='/pages/finans/cekler' title='Çekler' hasBullet={true} />
                <HtmlMenuItem to='/pages/finans/senetler' title='Senetler' hasBullet={true} />
            </HtmlMenuItemWithSub>

            {/* <!--begin::Separator--> */}
            <div className="separator mx-10"></div>
            {/* <!--end::Separator--> */}
            <HtmlMenuItemWithSub
                to='/apps/chat'
                title='Ayarlar'
                fontIcon='bi-archive'
                icon='gear'
            >
                <HtmlMenuItem to='/pages/ayarlar/sirket' title='Şirket' hasBullet={true} />
                <HtmlMenuItem to='/pages/ayarlar/roller' title='Roller' hasBullet={true} />
                <HtmlMenuItem to='/pages/ayarlar/kullanicilar' title='Kullanıcılar' hasBullet={true} />
                <HtmlMenuItem to='/pages/ayarlar/yazdirma' title='Yazdırma' hasBullet={true} />
                <HtmlMenuItem to='/pages/ayarlar/etiket' title='Etiket' hasBullet={true} />
                <HtmlMenuItem to='/pages/ayarlar/profil' title='Profil' hasBullet={true} />
            </HtmlMenuItemWithSub>
        </>
    )
}
