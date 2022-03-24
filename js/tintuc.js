const listItem = [{
        id: 1,
        image: 'pictures/tin-tuc/tintuc-1.png',
        name: 'Ngây ngất với top 10 mẫu nội thất chung cư phòng ngủ đẹp',
        description: 'Những căn hộ chung cư mini, có tính diện tích nhỏ ngày càng trở nên ưu chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp"'
    },
    {
        id: 2,
        image: 'pictures/tin-tuc/tintuc-2.png',
        name: '25+ mẫu giường ngủ hộc kéo thông minh cho căn phòng bạn',
        description: 'Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.'
    },
    {
        id: 3,
        image: 'pictures/tin-tuc/tintuc-3.png',
        name: 'tuyệt chiêu thiết kế chung cư mini 2 phòng ngủ siêu đẹp',
        description: 'Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc "thiết kế căn họ chung cư mini 2 phòng ngủ"'
    },
    {
        id: 4,
        image: 'pictures/tin-tuc/tintuc-1.png',
        name: 'Ngây ngất với top 10 mẫu nội thất chung cư phòng ngủ đẹp',
        description: 'Những căn hộ chung cư mini, có tính diện tích nhỏ ngày càng trở nên ưu chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp"'
    },
    {
        id: 5,
        image: 'pictures/tin-tuc/tintuc-2.png',
        name: '25+ mẫu giường ngủ hộc kéo thông minh cho căn phòng bạn',
        description: 'Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.'
    },
    {
        id: 6,
        image: 'pictures/tin-tuc/tintuc-3.png',
        name: 'tuyệt chiêu thiết kế chung cư mini 2 phòng ngủ siêu đẹp',
        description: 'Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc "thiết kế căn họ chung cư mini 2 phòng ngủ"'
    },
    {
        id: 7,
        image: 'pictures/tin-tuc/tintuc-1.png',
        name: 'Ngây ngất với top 10 mẫu nội thất chung cư phòng ngủ đẹp',
        description: 'Những căn hộ chung cư mini, có tính diện tích nhỏ ngày càng trở nên ưu chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp"'
    },
    {
        id: 8,
        image: 'pictures/tin-tuc/tintuc-2.png',
        name: '25+ mẫu giường ngủ hộc kéo thông minh cho căn phòng bạn',
        description: 'Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.'
    },
    {
        id: 9,
        image: 'pictures/tin-tuc/tintuc-3.png',
        name: 'tuyệt chiêu thiết kế chung cư mini 2 phòng ngủ siêu đẹp',
        description: 'Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc "thiết kế căn họ chung cư mini 2 phòng ngủ"'
    },
    {

        id: 10,
        image: 'pictures/tin-tuc/tintuc-1.png',
        name: 'Ngây ngất với top 10 mẫu nội thất chung cư phòng ngủ đẹp',
        description: 'Những căn hộ chung cư mini, có tính diện tích nhỏ ngày càng trở nên ưu chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp"'
    },
    {
        id: 11,
        image: 'pictures/tin-tuc/tintuc-2.png',
        name: '25+ mẫu giường ngủ hộc kéo thông minh cho căn phòng bạn',
        description: 'Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.'
    },
    {
        id: 12,
        image: 'pictures/tin-tuc/tintuc-3.png',
        name: 'tuyệt chiêu thiết kế chung cư mini 2 phòng ngủ siêu đẹp',
        description: 'Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc "thiết kế căn họ chung cư mini 2 phòng ngủ"'
    }
]

let pagination = {
    pageNumber: 1,
    pageSize: 9
}

function setListItem(list) {
    $('.new').html(''); //thiết lập class new về mảng rỗng
    for (let i = 0; i < listItem.length; i++) {
        let item = `<div class="col-md-4 new-item">
                <div class="new-item-img">
                        <a href="#">
                            <img src="${list[i].image}" alt="">
                        </a>
                    </div>
                    <a href="#">${list[i].name}</a>
                    <p>
                        ${list[i].description}
                    </p>
                </div>`

        $('.new').append(item)
    }
}

setListItem(listItem.slice(0, pagination.pageSize));

$('.new-pagination ul li ').click(function() {
    $('.new-pagination ul li ').removeClass('active');
    $(this).addClass('active');

    let page = $(this).attr('page-number');
    pagination.pageNumber = parseInt(page);

    let arr = listItem.slice(pagination.pageSize *
        pagination.pageNumber - pagination.pageSize, pagination.pageNumber *
        pagination.pageSize)
    setListItem(arr);
})