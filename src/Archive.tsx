import HeaderNav from './HeaderNav';
import { ClearBoth, StyledDotDivider } from './customStyledComponent';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export default function Archive() {
  return (
    <>
      <HeaderNav />
      <p>总计 38 篇文章</p>
      <p>
        展示方式：
        <StyledArchiveLink to='#' onClick={() => console.log('按时间归档')}>
          按月份
        </StyledArchiveLink>
        <StyledDotDivider> | </StyledDotDivider>
        <StyledArchiveLink to='#' onClick={() => console.log('按分类归档')}>
          按分类
        </StyledArchiveLink>
      </p>
      <div className='posts-list'>
        <h5>2022 年 2 月 (1)</h5>
        <ul>
          <li>
            <a href='/post/commandline-tools'>我的命令行开发环境 ❤️</a>
          </li>
        </ul>

        <h5>2021 年 10 月 (2)</h5>
        <ul>
          <li>
            <a href='/post/data-structure-skiplist'>跳跃表的构造思路和基本操作</a>
          </li>

          <li>
            <a href='/post/firing-squad-synchronization-problem'>射击队状态同步问题</a>
          </li>
        </ul>

        <h5>2021 年 7 月 (2)</h5>
        <ul>
          <li>
            <a href='/post/the-pattern-on-the-stone-notes'>《通灵芯片》读书笔记</a>
          </li>

          <li>
            <a href='/post/say-bye-to-robotics'>和机器人说再见</a>
          </li>
        </ul>

        <h5>2021 年 4 月 (3)</h5>
        <ul>
          <li>
            <a href='/post/network-tcp'>计算机网络 - TCP 协议原理总结</a>
          </li>

          <li>
            <a href='/post/algorithm-minimum-edit-distance'>最短编辑距离问题 - 动态规划方法及打印</a>
          </li>

          <li>
            <a href='/post/algorithm-repeated-string-pattern'>周期字符串问题（两种方法）</a>
          </li>
        </ul>

        <h5>2021 年 3 月 (13)</h5>
        <ul>
          <li>
            <a href='/post/data-structure-list-common-algorithm-problems'>链表 - 经典算法问题总结</a>
          </li>

          <li>
            <a href='/post/algorithm-topk'>最大的 K 个数 - TopK 问题</a>
          </li>

          <li>
            <a href='/post/quick-sort-and-merge-sort'>排序算法 - 快速排序和归并排序</a>
          </li>

          <li>
            <a href='/post/data-structure-heap-and-common-problems'>数据结构 - 堆的原理 和 常见算法问题</a>
          </li>

          <li>
            <a href='/post/algorithm-inplace-operations-on-array'>几个数组上的原地操作问题 - 分拣的思路</a>
          </li>

          <li>
            <a href='/post/algorithm-longest-increasing-subsequence'>最长递增子序列 - 动态规划方法及打印</a>
          </li>

          <li>
            <a href='/post/algorithm-longest-palindromic-subsequence'>最长回文子序列问题（两种方法）</a>
          </li>

          <li>
            <a href='/post/algorithm-longest-palindromic-substring'>最长回文子串问题（四种方法）</a>
          </li>

          <li>
            <a href='/post/algorithm-number-theory'>基本数论类算法 - 辗转相除和素数筛</a>
          </li>

          <li>
            <a href='/post/algorithm-basic-math-computations'>如何算法实现加减乘除四则运算</a>
          </li>

          <li>
            <a href='/post/algorithm-largest-sum-contiguous-subarray'>最大连续子序列和问题</a>
          </li>

          <li>
            <a href='/post/algorithm-search-sorted-2d-matrix'>有序二维矩阵搜索问题</a>
          </li>

          <li>
            <a href='/post/algorithm-longest-common-substring-and-longest-common-subsequence'>
              最长公共子串和最长公共子序列
            </a>
          </li>
        </ul>

        <h5>2021 年 2 月 (6)</h5>
        <ul>
          <li>
            <a href='/post/algorithm-string-searching-boyer-moore'>字符串匹配 - Boyer–Moore 算法原理和实现</a>
          </li>

          <li>
            <a href='/post/algorithm-string-searching-kmp'>字符串匹配 - KMP 算法原理和实现</a>
          </li>

          <li>
            <a href='/post/algorithm-golden-search'>单峰函数求极值 - 黄金分割法</a>
          </li>

          <li>
            <a href='/post/algorithm-binary-search'>单调数组上的二分查找算法</a>
          </li>

          <li>
            <a href='/post/cybernetics-and-scientific-methodology-notes'>《控制论和科学方法论》读书笔记</a>
          </li>

          <li>
            <a href='/post/bitproto-notes'>bitproto 的研发过程和工作原理</a>
          </li>
        </ul>

        <h5>2020 年 11 月 (1)</h5>
        <ul>
          <li>
            <a href='/post/my-notebooks-middle-school-age'>中学时代的笔记本 - 回忆曾经的梦想</a>
          </li>
        </ul>

        <h5>2019 年 8 月 (7)</h5>
        <ul>
          <li>
            <a href='/post/consistent-hashing-algorithms-part-4-maglev-consistent-hash'>
              一致性哈希算法（四）- Maglev一致性哈希法
            </a>
          </li>

          <li>
            <a href='/post/consistent-hashing-algorithms-part-3-jump-consistent-hash'>
              一致性哈希算法（三）- 跳跃一致性哈希法
            </a>
          </li>

          <li>
            <a href='/post/consistent-hashing-algorithms-part-2-consistent-hash-ring'>一致性哈希算法（二）- 哈希环法</a>
          </li>

          <li>
            <a href='/post/consistent-hashing-algorithms-part-1-the-problem-and-the-concept'>
              一致性哈希算法（一）- 问题的提出
            </a>
          </li>

          <li>
            <a href='/post/cap-and-consistency-models'>分布式的 CAP 定理和一致性模型</a>
          </li>

          <li>
            <a href='/post/logical-clocks'>逻辑时钟 - 如何刻画分布式中的事件顺序</a>
          </li>

          <li>
            <a href='/post/complexity-a-guided-tour-notes'>《复杂》读书笔记</a>
          </li>
        </ul>

        <h5>2018 年 5 月 (1)</h5>
        <ul>
          <li>
            <a href='/post/power-law'>幂律分布 - 比例之谜</a>
          </li>
        </ul>

        <h5>2014 年 10 月 (2)</h5>
        <ul>
          <li>
            <a href='/post/goroutine-guide-part-2'>Go 语言并发与并行学习笔记 （二）</a>
          </li>

          <li>
            <a href='/post/goroutine-guide-part-1'>Go 语言并发与并行学习笔记 （一）</a>
          </li>
        </ul>

        <ClearBoth />
      </div>
    </>
  );
}

const StyledArchiveLink = styled(Link)`
  &:visited,
  &:visited {
    color: #c58e04;
    text-decoration: none;
  }
`;
