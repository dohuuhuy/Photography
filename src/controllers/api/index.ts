
export const api_get = async (url: any) => {
    const option: any = {
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': 0
        }
    }
    return await fetch(url, option)
        .then((rs) => {
            return rs ? rs.json() : null
        })
        .catch(
            () => {
                return null
            }
        )
}




export const get_path = (String: any) => {

    const find_string = String?.lastIndexOf('-page-')

    if (find_string === -1) {
        return { path: String, page: 1 }
    }

    const sub_page = String?.substring(find_string) // lấy -page- trở về sau 

    const num = sub_page?.substring(sub_page?.lastIndexOf('-') + 1) //  tìm đến vị trí ký tự và cộng lên 1 đơn vị -> num

    const sub_path = String?.substring(0, find_string)

    if (Number(num)) {
        return { path: sub_path, page: Number(num) }
    }

}

const list_general = ['Bác Sĩ', 'Bệnh Viện', 'Phòng Khám']


export const get_name_general = (path: any) => {
    var slug = require('vietnamese-slug');

    return list_general.find((i) => {
        return slug(i) === path
    })
}

