---
title: "Hiệu ứng cánh bướm với Python"
category: "science"
date: "2021-02-07 12:00:00 +09:00"
desc: "Mô phỏng hiệu ứng cánh bướm trong Thuyết hỗn mang (Chaos Theory) với Python."
thumbnail: "./images/hieu-ung-canh-buom-python/thumb.png"
alt: "butterfly effect with python"
---

## Mở đầu

Trong bộ phim **Jurassic Park**, Tiến sĩ Ian Malcolm từng nói như sau :

>"It simply deals with unpredictability in complex systems. The shorthand is the Butterfly Effect. A butterfly can flap its wings in Peking and in Central Park you get rain instead of sunshine."

Tạm dịch :

>"Nó chỉ đơn giản là đề cập đến việc không thể đoán trước trong các hệ thống phức tạp. Gọi tắt là **Hiệu ứng cánh bướm**. Một con bướm có thể vỗ cánh ở Bắc Kinh và ở Công viên Trung tâm, bạn gặp mưa thay vì nắng."

Về thứ gọi là **Hiệu ứng cánh bướm**, đầu tiên thì tớ xin trích một đoạn nhỏ về khái niệm của nó trên [**Wikipedia**](https://vi.wikipedia.org/wiki/Hi%E1%BB%87u_%E1%BB%A9ng_b%C6%B0%C6%A1m_b%C6%B0%E1%BB%9Bm) như sau :

>**Hiệu ứng cánh bướm** *(Butterfly Effect)* là một cụm từ dùng để mô tả khái niệm trong **Thuyết hỗn mang** về độ nhạy cảm của hệ đối với điều kiện gốc (sensitivity on initial conditions). Hiệu ứng này được nhà toán học **Edward Norton Lorenz** khám phá ra. Khi thực hiện mô phỏng các hiện tượng thời tiết, Lorenz nhận thấy rằng nếu ông làm tròn các dữ liệu đầu vào, dù với sai số bé thế nào đi nữa, thì kết quả cuối cùng **luôn khác với kết quả** của dữ liệu không được làm tròn. Một thay đổi nhỏ của dữ liệu đầu vào dẫn đến một thay đổi lớn của kết quả. Tên gọi **hiệu ứng cánh bướm** bắt nguồn từ hình ảnh ẩn dụ: *một cơn bão chịu sự ảnh hưởng của một con bươm bướm nhỏ bé vỗ cánh ở một nơi nào đó rất xa cơn bão.*

Nếu đọc cái hiểu luôn, chúc mừng, bạn là thiên tài. Còn nếu không thì cũng không có gì phải lo lắng, hôm nay tớ giúp các bạn hình dung dễ dàng hơn về **Hiệu ứng cánh bướm** bằng cách mô phỏng trực quan bằng animation với **Python**.

Tớ sẽ sử dụng **con lắc đôi** để mô phỏng chuyển động. Ở Vật Lý cấp 3 thì ta đã được học *con lắc đơn* rồi đúng hông. Con lắc đôi chẳng qua là giống con lắc đơn, nhưng được **gắn thêm một con lắc thứ 2 nữa**.

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/hieu-ung-canh-buom-python/dp.jpg)

Rồi, đó là một số điểm cần chú ý.

À tớ cũng chỉ hiểu **khái niệm** và biết cách **mô phỏng** nó thôi, chứ không phải cao nhân hay nhà nghiên cứu hiểu biết sâu rộng về mấy thứ này đâu. Phạm vi kiến thức trong bài viết này cũng nằm trong tầm hiểu biết của tớ, không hơn không kém.

Okay, giờ thì bắt đầu nhee.

## Tại sao lại là Con lắc đôi?

Vẫn theo [**Wikipedia**](https://en.wikipedia.org/wiki/Double_pendulum) định nghĩa, **con lắc đôi** là một *"hệ thống vật lý đơn giản thể hiện hành vi động lực học phong phú với độ nhạy mạnh mẽ với các điều kiện ban đầu"*.

Đúng vậy, sự đơn giản cùng với độ nhạy của con lắc đôi đối với các **điều kiện ban đầu** *(cụm từ này nghĩa là sao thì xin mời các bạn đọc tiếp bài viết hê hê)* sẽ giúp ta dễ dàng xây dựng một hệ thống vật lý. 

Hơn nữa, để quan sát chuyển động thực tế của **hiệu ứng cánh bướm** một cách trực quan nhất, dễ hiểu nhất thì không có thứ gì hợp hơn **Con lắc đôi.**

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/hieu-ung-canh-buom-python/double-pendulum.png)

## Nền tảng Toán học

Chà, Toán học à...

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/hieu-ung-canh-buom-python/panik.jpg)

**Đừng lo.** Như tớ nói phía trên, bài viết nhằm mục đích là mô phỏng **Hiệu ứng cánh bướm,** chứ không phải cuộc phiêu lưu vào những công thức toán học hay vật lý. Đây chỉ là một phần **giới thiệu ngắn gọn** để cho các bạn hiểu về những gì tớ đang cố gắng thực hiện.

Nếu bạn không quan tâm đến phần này, hãy đến thẳng phần [**mô phỏng con lắc đôi**](#mô-phỏng-con-lắc-đôi).

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/hieu-ung-canh-buom-python/kalm.jpg)

Rồi, để mô phỏng chueyenr động của con lắc đôi, tớ sẽ sử dụng cái gọi là [**Cơ học Lagrange**](https://vi.wikipedia.org/wiki/C%C6%A1_h%E1%BB%8Dc_Lagrange). Vì sao? **Cơ học Lagrange** không chỉ khiến cho các phép tính trong bài toán này linh hoạt hơn, mà nó còn là một khuôn khổ đã được trình bày và thiết lập để mô hình hóa các hệ thống vật lý mà **Cơ học cổ điển** (hay còn gọi là **Cơ học Newton**) không dễ dàng gì để thực hiện được.

Một phần quan trọng trong **Cơ học Lagrange** đó chính là [**phương trình Euler-Lagrange**](https://en.wikipedia.org/wiki/Euler%E2%80%93Lagrange_equation), là một phương trình đạo hàm riêng cấp 2 :

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/hieu-ung-canh-buom-python/el.png)

Trong đó, **L** là **Lagrangian** mô tả trạng thái của hệ thống dưới dạng động năng và thế năng của nó.

Rồi, sau khi có được **phương trình Euler-Lagrange**, kết hợp với các [**phương trình vi phân thường**](https://en.wikipedia.org/wiki/Ordinary_differential_equation) bậc 2, vậy là ta có thể giải quyết bài toàn này bằng **Python**.

Để hiểu hơn và các bài toán Con lắc đôi, các bạn có thể tham khảo thêm [**ở đây.**](https://scienceworld.wolfram.com/physics/DoublePendulum.html)

## Mô phỏng con lắc đôi

Rồi, tiếp theo là phần code. Tớ sẽ hiện thực các công thức và giải thuật đã trình bày ở trên trong **Python**. Do code hơi dài nên không thể ghi hết ở đây, tớ sẽ để link ở cuối bài, các bạn có thể tham khảo nha.

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/hieu-ung-canh-buom-python/double-pendulum.png)

Tóm lại thì về cơ bản, tớ khởi tạo các đối tượng `DoublePendulum` với các tham số như chiều dài `L`, khối lượng `m`, điều kiện ban đầu `y0`, v.v. như sau:

```python
double_pendulum = DoublePendulum(
    L1=5,
    L2=5,
    m1=1,
    m2=1,
    g=9.81,
    y0=[90, 0,-10,0]
)
```

Rồi sau đó, tiến hành giải phương trình vi phân tại các mốc thời gian khác nhau với package `scipy.integrate` bằng cách sử dụng hàm `odient`, các bạn có thể tham khảo tại[`scipy.integrate.odient`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.odeint.html).

Kết hợp các mốc thời gian lại với nhau, ta sẽ có một animation, giống như kiểu làm phim ngày xưa, kết hợp các bức ảnh tĩnh để được một khung hình động, kiểu vậy.

Okay vậy là xongg phần tính toán số học, giờ chỉ việc biểu diễn chuyển động của nó ra mà thôi. Ta sẽ sử dụng hàm [`matploblib.animation.FuncAnimation `](https://matplotlib.org/3.3.2/api/_as_gen/matplotlib.animation.FuncAnimation.html). Hàm này sẽ tạo animation bằng cách gọi hàm **liên tục** và **lặp đi lặp lại**.

Rồi, bắt đầu mô phỏng **con lắc đôi** thôi.

Đầu tiên là **một** con lắc đôi, trông nó sẽ như này :

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/hieu-ung-canh-buom-python/1.gif)

Quá xịnnn. Nhưng đừng vội mừng, mọi thứ mới chỉ vừa bắt đầu, phần hay ho vẫn đang ở phía trước hê hê 😈.

Trong phần [`Tại sao lại là Con lắc đôi?`](#tại-sao-lại-là-con-lắc-đôi) trước đó tớ có nói rằng con lắc đôi có độ nhạy rất lớn với **điều kiện ban đầu**. Giờ tớ sẽ nói rõ hơn về thứ này bằng mô hình mà con lắc mà ta đã xây dựng.

Nghĩa trên mặt chữ, đọc thì cũng thể hình dung sơ sơ rồi đúng không, `rất nhạy` và độ nhạy này tức là **chỉ cần thay đổi nhỏ nhất về góc ban đầu hoặc vận tốc góc khởi tạo ban đầu cũng có thể dẫn đến các chuyển động rất khác nhau, và rất nhanh.**

Để dễ hình dung, tớ sẽ tạo mô hình không phải 1 mà là **10 con lắc đôi,** với độ lệch nhau là **0.5°**, và ta sẽ xem có chuyện gì xảy ra.

## Hiệu ứng cánh bướm

Sau khi khởi tạo 10 con lắc với độ lệch là 0.5°, trông nó sẽ như sau :

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/hieu-ung-canh-buom-python/10.gif)

Vâng, và thứ các bạn đang thấy chính xác là **Hiệu ứng cánh bướm** 🦋.

Trong vòng chưa đầy 15 giây, 10 con lắc đôi với xuất phát chỉ cách nhau **0.5°** nhanh chóng phân kỳ và chuyển động cực kỳ hỗn loạn.

***Vậy mô hình con lắc đôi này có liên quan như thế nào đến việc con bướm vỗ cánh ở Bắc Kinh và làm thay đổi thời tiết ở Công viên Trung tâm?***

*Đơn giản như các bạn có thể thấy,* với một hệ thống **rất đơn giản** như 10 con lắc đôi mà nó đã phản ứng **rất nhạy và nhanh** với chỉ một sự thay đổi **vô cùng nhỏ** về góc ban đầu. Thì đối với các hệ thống phức tạp như **thời tiết** thì việc đó kinh khủng ra làm sao.

Thời tiết bị ảnh hưởng bởi vô số các **đại lượng biến thiên,** đó là lý do thời tiết cực kỳ khó dự báo. Vậy nên xem VTV dự báo thời tiết ngày mai nắng thì đem theo một cái áo mưa có khi lại là một lựa chọn sáng suốt đấy nhé.

Mở rộng hơn là các sự kiện lịch sử. Có thể những sự kiện vô cùng nhỏ đã xảy ra hàng thế kỷ trước có thể có tác động đáng kể đến thời đại chúng ta đang sống hiện nay. Thứ này dẫn đến thứ kia, thứ kia dẫn đến thứ khác nữa, vv... như domino vậy. Và đột nhiên, một lần bạn vấp phải ngón chân của mình có thể dẫn đến mất điện ở Trung Quốc trong 20 năm cũng không chừng hê hê.

:::important Bài học rút ra
Nếu một ngày bạn cảm thấy nếu mình là đứa đen đủi thứ 2 thì không thằng nào dám nhận thứ nhất. Đừng lo, biết đâu những gì bạn làm hôm nay sẽ ảnh hưởng đến cuộc sống của bạn trong tương lai đấy 😄
:::

## Cuối cùng

Để tô đậm thêm về **Hiệu ứng cánh bướm**, tớ sẽ tạo ra một masterpiece với con lắc đôi, thay vì 10 con như ở trên, lần này sẽ là **300.** 

Và trông nó như này đây :

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/hieu-ung-canh-buom-python/300.gif)

Quá đỉnh 😄

**Về source code,** các bạn có thể tham khảo [**ở đây.**](https://github.com/meokisama/butterflyeffect)

## References

- Tham khảo định nghĩa [**Wikipedia**](https://vi.wikipedia.org/wiki/Hi%E1%BB%87u_%E1%BB%A9ng_b%C6%B0%C6%A1m_b%C6%B0%E1%BB%9Bm)
- Dựa trên bài viết [**Chris Greening**](https://dev.to/chrisgreening/visualizing-the-butterfly-effect-with-python-39m3)