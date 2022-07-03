---
title: "Password Đại Cương"
category: "hacking"
date: "2021-01-13 12:00:00 +09:00"
desc: "Tất tần tật mọi ngóc ngách trong hiểu biết của tớ về cái thứ được gọi là 'Mật khẩu'."
thumbnail: "./images/password-dai-cuong/thumb.png"
alt: "all about password"
---

## Mở đầu

Không phải bàn cãi, **Mật khẩu** *(Password)* có lẽ là thứ căn bản nhất, phổ biến nhất mà hầu như ai ai cũng phải sử dụng khi bước chân vào Internet.

Đại bộ phận người sử dụng mật khẩu chỉ xem nó là một **dãy kí tự đơn thuần** không hơn không kém để tránh người khác truy cập trái phép vào tài khoản cá nhân của mình. Nhưng mấy ai hiểu được, phía sau *"dãy kí tự đơn thuần"* đó là cả một trò chơi bảo mật vô cùng phức tạp và chông gai.

Chúng ta sử dụng mật khẩu để bảo vệ chính mình, nhưng không phải ai cũng biết cách đặt một mật khẩu **đủ mạnh** hay là những lưu ý cần thiết khi sử dụng mật khẩu. Trong bài viết này, tớ sẽ trình bày tất tần tật những mặt của mật khẩu, và hacker có thể bẻ khóa mật khẩu của bạn bằng những cách nào.

Những kiến thức này không phải ai cũng biết và để ý *(nếu không muốn nói là hầu như không)*, và những thứ này cũng **không phải muốn là đọc được đâu,** hầu như rất ít những trang web nào chia sẻ những vấn đề này *(tớ kiếm thử rồi nhưng không hề có)*. Nên các bạn có đọc được bài này thì cũng chịu khó đọc hết nha, chỉ có tốt chứ không mất gì đâu hê hê.

Okay, bắt đầu thuiii.

## Vấn đề

Tớ xin lấy một ví dụ đó là sự kiện ***The Fappenning***, một sự kiện rò rỉ lớn những bức ảnh khỏa thân và bán khỏa thân của Rihanna, Kate Upton,... cùng nhiều người nổi tiếng khác, hầu hết là phụ nữ - các bức ảnh lưu trữ trong điện thoại di động của họ đã bị truy cập từ xa rồi bị chia sẻ trên mạng.

Những bức ảnh trên xuất hiện đầu tiên ở một diễn đàn hacker chuyên đăng tải ảnh bị đánh cắp. Diễn đàn này còn có nhiều cuộc thảo luận sôi nổi về các **công cụ điều tra số** dùng để đánh cắp những bức ảnh đó.

:::important Điều tra số (Digital forensics)
Một nhánh của **khoa học pháp y**, bao gồm việc khôi phục và điều tra các tài liệu được tìm thấy trong các thiết bị kĩ thuật số, thường là có liên quan đến tội phạm máy tính.
:::

Do tất cả người nổi tiếng đều sử dụng iPhone, nên theo suy đoán ban đầu, đây có lẽ là một cuộc xâm phạm dữ liệu nhắm vào iCloud - dịch vụ lưu trữ đám mây của Apple. Nhưng Apple đã phủ nhận mọi sai sót từ phía họ.

>*Trong các trường hợp mà chúng tôi đã điều tra, không có trường hợp nào xảy ra do hành vi xâm phạm vào các hệ thống của Apple, bao gồm cả iCloud hay ứng dụng Tìm iPhone.*

Sau cùng, Apple tuyên bố sự việc trên là **"cuôc tấn công nhắm vào tên người dùng, mật khẩu và câu hỏi bảo mật"**.

## Đại cương về Mật khẩu

### Cốt lõi vấn đề

Để bảo vệ tài khoản iCloud và các tài khoản trược tuyến khác của mình, bạn sẽ phải đặt một **mật khẩu đủ mạnh**. Đó là điều hiển nhiên.

Tuy nhiên, nhiều người lại **không coi trọng** vấn đề này, kể cả các người nổi tiếng hay lãnh đạo các tập đoàn lớn, họ rất lười đặt mật khẩu. Một ví dụ là **Michael Lynton**, Giám đốc Điều hành của hãng **Sony Entertainment**. Ai đời không đâu lại dùng cụm ký tự `sonyml3` làm mật khẩu tài khoản tên miền của mình. Và không có gì ngạc nhiên, email của ông bị tấn công và phát tán trên Internet vì kẻ tấn công nắm được quyền truy cập vào gần như mọi cơ sở dữ liệu trong công ty với vai trò quản trị viên.

Việc chọn một mật khẩu khó đoán không ngăn được các công cụ tấn công như [**Hashcat**](https://github.com/hashcat/hashcat) *(một công cụ hỗ trợ năm phương thức tấn công độc đáo cho hơn 300 thuật toán hashing đã được tối ưu hóa, có hỗ trợ cả CPU lẫn GPU)*, nhưng nó sẽ làm cho quá trình này diễn ra chậm lại, đủ để hacker nản lòng mà chuyển sang mục tiêu khác dễ ăn hơn.

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/password-dai-cuong/hashcat.png)

<br>

Trong danh sách [những mật khẩu phổ biến nhất năm 2020](https://nordpass.com/most-common-passwords-list/) theo **NordPass**, ta có thể kể đến như `123456`,`123456789`,`qwerty`,`password`,`12345678`,`iloveyou`,... . Nếu cũng đang sử dụng mấy thứ mật khẩu vớ vẩn như trên kia, thì rất có thể bạn sẽ **trở thành nạn nhân** của các vụ xâm phạm dữ liệu, vì hầu như tất cả các bộ công cụ bẻ khóa mật khẩu hiện nay đều **có sẵn** những cụm từ phổ biến này. Nếu muốn, bạn có thể truy cập trang [**haveibeenpwned.com**](https://haveibeenpwned.com/) để kiểm tra xem tài khoản của mình đã từng bị xâm phạm bao giờ chưa *(tương đối)*.

| Position | Password    | Number of users | Time to crack | Time exposed |
|:--------:|:-----------:|:---------------:|:-------------:|:------------:|
| 1        | `123456`    | 2,543,285       | < a second    | 23,597,311   |
| 2        | `123456789` | 961,435         | < a second    | 7,870,694    |
| 3        | `picture1`  | 371,612         | 3 hours       | 11,190       |
| 4        | password    | 360,467         | < a second    | 3,759,315    |
| 5        | 12345678    | 322,187         | < a second    | 2,944,615    |
| 6        | 111111      | 230,507         | < a second    | 3,124,368    |
| 7        | 123123      | 189,327         | < a second    | 2,238,694    |
| 8        | 12345       | 188,268         | < a second    | 2,389,787    |
| 9        | 1234567890  | 171,724         | < a second    | 2,264,884    |
| 10       | senha       | 167,728         | 10 seconds    | 8,213        |
| 11       | 1234567     | 165,909         | < a second    | 2,516,606    |
| 12       | qwerty      | 156,765         | < a second    | 3,946,737    |
| 13       | abc123      | 151,804         | < a second    | 2,877,689    |
| 14       | Million2    | 143,664         | 3 hours       | 162,609      |
| 15       | 000000      | 122,982         | < a second    | 1,959,780    |
| 16       | 1234        | 112,297         | < a second    | 1,296,186    |
| 17       | iloveyou    | 106,327         | < a second    | 1,645,337    |
| 18       | aaron431    | 90,256          | 3 hours       | 30,576       |
| 19       | password1   | 87,556          | < a second    | 2,418,984    |
| 20       | qqww1122    | 85,476          | 52 minutes    | 122,481      |

<br>

Ngày nay, chúng ta có thể làm tốt hơn vậy, thực ra là tốt hơn **rất nhiều**. Có nhiều cách sắp xếp ký tự chữ và số *dài hơn, phức tạp hơn nhiều*. Đừng nghĩ nó khó khăn, tớ sẽ hướng dẫn cho các bạn cả cách tự động và thủ công để thực hiện những công việc đó.

### Mật khẩu an toàn

Hãy xem xét *(khuyến khích)* sử dụng một số kĩ thuật sau đây khi tạo mật khẩu, nó sẽ giúp bạn có thể giữ an toàn tốt nhất cho tài khoản của mình.

Đầu tiên, thay vì **mật khẩu thông thường** *(password)*, hãy sử dụng các **cụm mật khẩu** *(passphrase)*, thường có độ dài 20-25 kí tự hoặc hơn. Lí tưởng nhất, hãy sử dụng các kí tự ngẫu nhiên, ví dụ `bhjb5#fdw9738@kj3_4m92&kd9`. Nhưng thật không may, con người phần lớn khó có thể học thuộc được những chuỗi ngẫu nhiên như vậy. Vì vậy, hãy sử dụng các phần mềm quản lý mật khẩu. Những phần mềm này sẽ lưu trữ mật khẩu trong kho chứa **có khóa** và cho phép bạn truy cập bằng một cú nhấp chuột khi cần, đồng thời nó còn có thể tự động hóa quá trình tạo mật khẩu ở trên kia, chỉ với vài click chuột bạn sẽ có một mật khẩu **rất mạnh và độc đáo.**

Tớ xin đề xuất 2 phần mềm, đó là [**Password Safe**](https://github.com/pwsafe/pwsafe) và [**KeePass**](https://keepass.info/download.html), cả 2 đều chỉ *lưu trữ dữ liệu các mật khẩu cục bộ* trên máy tính của bạn. Hơn nữa, đều là mã nguồn mở nên bạn có thể yên tâm. **Tức là sao?** Mã nguồn mở tức là bạn có quyền kiểm soát và truy cập vào source code của nó, tự kiểm tra và biên dịch mã nguồn để **tránh backdoor**, thậm chí bạn có thể tự mình kiểm tra xem bảo mật có được triển khai chính xác hay không, nếu muốn, bạn có thể sử dụng bất kỳ thuật toán mã hóa nào khác.

Tuy nhiên, phương pháp này có hai vấn đề cần lưu ý.

**Thứ nhất,** các phần mềm quản lý mật khẩu lại sử dụng một *mật khẩu chính* khác để có thể truy cập vào. Nếu chẳng may máy tính của bạn bị nhiễm một phần mềm độc hại chẳng hạn như *keylog*, có khả năng rất cao *mật khẩu chính* này sẽ bị đánh cắp. Khi đó, trò chơi bảo mật sẽ kết thúc tại đây. Hacker sẽ có quyền truy cập vào kho lưu trữ và đánh cắp tất cả các mật khẩu mà bạn lưu trữ trong này.

:::important Keylog
Sử dụng một phần mềm để ghi lại mọi thao tác trên bàn phím của người dùng máy tính, đặc biệt là để tiếp cận trái phép mật khẩu và các thông tin bí mật khác.
:::

**Thứ hai,** khá rõ ràng là nếu bạn vô tình *quên* mất mật khẩu chính, bạn sẽ mất tất cả các mật khẩu còn lại. Nhưng không sao, vì bạn luôn có thể tạo lại mật khẩu cho từng tài khoản khá dễ dàng. Tuy nhiên, sẽ là một rắc rối lớn nếu bạn có nhiều tài khoản khác nhau. Như tớ đây, tớ có hơn **80 tài khoản** khác nhau trên nhiều nền tảng MXH, forum vân vân, giờ đi reset password tất cả... nghĩ thôi là thấy nản.

<br>

Một nguyên tắc quan trọng khác là **không bao giờ sử dụng cùng một mật khẩu** cho hai tài khoản khác nhau. Điều này nghe có vẻ hơi khó vì ngày nay đa số chúng ta sử dụng mật khẩu cho hầu như tất cả mọi thứ. Do đó, hãy để phần mềm quản lý mật khẩu tạo và lưu giữ các mật khẩu mạnh mẽ và riêng biệt cho bạn.

### Vậy đã an toàn chưa?

Ngay cả khi bạn đã có một mật khẩu mạnh, hacker vẫn có thể sử dụng công nghệ để đánh bại bạn. Có những chương trình đoán mật khẩu ví dụ  như [**John the Ripper**](https://github.com/openwall/john), một chương trình mã nguồn mở miễn phí mà bất kỳ ai cũng có thể sử dụng và hoạt động trong các tham số cấu hình do người dùng thiết lập.

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/password-dai-cuong/john.jpg)

Ví dụ, người dùng có thể chỉ định số lượng kí tự cần thử, có sử dụng các kí tự đặc biệt hay không,... **John the Ripper** và các phần mềm tấn công mật khẩu khác có thể hoán vị các kí tự trong mật khẩu bằng cách sử dụng các bộ quy tắc khác nhau, ví dụ **bộ quy tắc leetspeak** - một hệ thông dùng số để thay thế chữ cái, như `v137 n4m v0 d1ch` thay cho `viet nam vo dich`. 

**Thấy quen hông?** Đúng rồi, teencode ở Việt Nam đấy :))

Cũng vì như vậy nên nếu số lượng kí tự càng nhiều thì để bẻ khóa được bằng kĩ thuật này sẽ càng khó khăn và tốn nhiều thời gian và công sức. Đó là lí do tớ kêu nên đặt một mật khẩu ngẫu nhiên và 25 kí tự trở lên. Khi gặp phải một mật khẩu như vậy, hacker sẽ không có đủ thời gian lẫn nguồn lực để ngồi phá giải.

### Bộ xương phía sau mật khẩu

Khi bạn gõ một mật khẩu, dù là để mở khóa máy tính hay là đăng nhập một dịch vụ trực tuyến, mật khẩu đó sẽ được đưa qua một thuật toán một chiều gọi là **hàm băm** *(hashing function)*. Nó khác với quá trình mã hóa. Mã hóa là 2 chiều : bạn có thể mã hóa và giải mã, với điều kiện bạn có chìa khóa trong tay. Hàm băm là một dạng dấu vân tay đại diện cho một chuỗi cụ thể. Về lý thuyết, các thuật toán một chiều là **bất khả đảo,** hoặc ít nhất là không dễ dàng.

Và nội dung được lưu trữ trong cơ sở dữ liệu mật khẩu trên máy tính hay tài khoản đám mây của bạn không phải là `mypasswordhehe123`, mà là giá trị băm của nó, tức là một chuỗi các số và chữ cái khác hoàn toàn, đóng vai trò là dấu hiệu đại diện cho mật khẩu của bạn.

Tất nhiên, các giá trị băm đó **vẫn có thể bị hacker đánh cắp** thông qua một cuộc tấn công hoặc bị rò rỉ trong các vụ xâm phạm dữ liệu. Sau khi lấy được các giá trị băm mật khẩu này, hacker có thể sử dụng nhiều công cụ có sẵn công khai, như **John the Ripper** hay **Hashcat**, để phá vỡ chúng nhằm tìm ra mật khẩu thực thông qua kĩ thuật vét cạn *(brute force)* hoặc thử từng từ trong các từ điển mật khẩu có sẵn.

:::note
Nhân tiện, **Hashcat** phân tán quá trình tấn công qua nhiều GPU và mạnh hơn nhiều so với **John the Ripper**.
:::

:::important Tấn công vét cạn (brute force)
Kiểu tấn công được dùng cho tất cả các loại mã hóa, hoạt động bằng cách thử tất cả các chuỗi mật khẩu có thể để tìm ra mật khẩu. Vì thế thời gian thực hiện phương pháp này rất lâu, tùy theo độ dài của mật khẩu. Thông thường, kĩ thuật này chỉ được sử dụng khi tất cả các phương pháp khác đều không có hiệu quả.
:::

Các tùy chọn trong **John the Ripper** hay **Hashcat** cho phép hacker sửa đổi các cụm từ được thử trước nhiều bộ quy tắc, ví dụ như bộ quy tắc **leetspeak** tớ nói ở trên. Các phương pháp bẻ khóa này hiệu quả hơn nhiều so với tấn công vét cạn đơn giản.

Thông thường, những mật khẩu đơn giản và phổ biến sẽ bị phá trước, sau đó mới tới lượt các mật khẩu phức tạp hơn. Sử dụng công cụ bẻ khóa kết hợp với username và giá trị băm mật khẩu đánh cắp được, hacker có thể truy cập vào một hoặc nhiều tài khoản của bạn bằng cách thử mật khẩu đó trên nhiều website kết nối với địa chỉ email hoặc các dữ liệu định danh khác của bạn.

### Mật khẩu không phải chỉ dành cho tài khoản trực tuyến

Nếu đã bảo vệ các dịch vụ trực tuyến của mình bằng mật khẩu, thì **đừng ngại bảo vệ luôn các thiết bị cá nhân,** tớ nói nghiêm túc đấy. Hầu hết chúng ta đều có laptop hay smartphone. Có thể bây giờ bạn ở nhà một mình, nhưng còn mấy thằng ml bạn thân bạn mới đến chơi lát nữa thì sao? Tại sao phải chấp nhận rủi ro rằng một trong số mấy thằng đó có thể truy cập các file, ảnh, video bí mật,... khi nó nghịch laptop?

Việc tự bảo vệ mình ở trường hay nơi công cộng, chỗ làm việc thậm chí còn quan trọng hơn. Giả dụ đột nhiên bạn có việc đột xuất phải rời đi. Ai đó đi ngang qua có thể thấy được email cá nhân của bạn, hay account Facebook chưa đăng xuất. Tệ hơn là được tặng kèm hẳn 1 status gồm nhiều từ tượng hình không đáng có.

Có nhiều phương pháp sáng tạo để ngăn chặn tình huống này, dễ nhất đươngg nhiên là khóa màn hình **bằng tay,** hoặc là sử dụng **khóa màn hình bluetooth** để xác định bạn có ở gần máy tính hay không. Nói cách khác, nếu bạn vào nhà vệ sinh và smartphone của bạn ra khỏi phạm vi bluetooth của máy tính, thì màn hình sẽ bị khóa ngay lập tức.

:::tip
**Window 10** cũng hỗ trợ sẵn chức năng này, tên là **Dynamic Lock**. Chỉ cần kết nối bluetooth với smartphone và bật chức năng này lên trong Settings là xong.

Tuy nhiên, nó **không đảm bảo an toàn tuyệt đối,** với 4 lý do sau đây :
- **Dynamic Lock** phụ thuộc vào **Bluetooth** để hoạt động, nên nó cũng hay gặp trục trặc khi mà chuẩn Bluetooth từ trước tới nay chưa bao giờ được đánh giá là ổn định.
- PC của bạn vẫn mở khoá cho tới khi bạn (với chiếc smartphone trong túi quần) đi ra ngoài với một khoảng cách xa tầm kết nối của chuẩn Bluetooth.
- PC vẫn mở khoá khi bạn bước ra khỏi khoảng cách này và chỉ khoá màn hình **30 giây** sau đó.
- Nếu có người lạ dùng PC của bạn khi nó đang được mở khoá, **Dynamic Lock** không còn có tác dụng nữa.
:::

<br>

Tạo mật khẩu để bảo vệ các tài khoản trực tuyến là một chuyện, nhưng việc đó sẽ trở nên **vô nghĩa** nếu có người lấy được thiết bị của bạn, nhất là khi bạn đang để các tài khoản trực tuyến ở trạng thái đăng nhập. Vì vậy, hãy luôn đưa các thiết bị của mình vào trạng thái cần được bảo vệ giống như các tài khoản trực tuyến nhe.

