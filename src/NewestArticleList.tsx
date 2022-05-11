import React from 'react';
import { ClearBoth } from './customStyledComponent';
import { Link } from 'react-router-dom';

export default function NewestArticleList() {
  return (
    <>
      <h5>最新文章</h5>
      <div className='posts-list'>
        <ul>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2022/02</span>
            </span>
            <Link to='/article/1' className='posts-list-post-title'>
              我的命令行开发环境 ❤️
            </Link>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/10</span>
            </span>
            <a href='/post/data-structure-skiplist' className='posts-list-post-title'>
              跳跃表的构造思路和基本操作
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/10</span>
            </span>
            <a href='/post/firing-squad-synchronization-problem' className='posts-list-post-title'>
              射击队状态同步问题
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/07</span>
            </span>
            <a href='/post/the-pattern-on-the-stone-notes' className='posts-list-post-title'>
              《通灵芯片》读书笔记
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/07</span>
            </span>
            <a href='/post/say-bye-to-robotics' className='posts-list-post-title'>
              和机器人说再见
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/04</span>
            </span>
            <a href='/post/network-tcp' className='posts-list-post-title'>
              计算机网络 - TCP 协议原理总结
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/04</span>
            </span>
            <a href='/post/algorithm-minimum-edit-distance' className='posts-list-post-title'>
              最短编辑距离问题 - 动态规划方法及打印
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/04</span>
            </span>
            <a href='/post/algorithm-repeated-string-pattern' className='posts-list-post-title'>
              周期字符串问题（两种方法）
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/03</span>
            </span>
            <a href='/post/data-structure-list-common-algorithm-problems' className='posts-list-post-title'>
              链表 - 经典算法问题总结
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/03</span>
            </span>
            <a href='/post/algorithm-topk' className='posts-list-post-title'>
              最大的 K 个数 - TopK 问题
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/03</span>
            </span>
            <a href='/post/quick-sort-and-merge-sort' className='posts-list-post-title'>
              排序算法 - 快速排序和归并排序
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/03</span>
            </span>
            <a href='/post/data-structure-heap-and-common-problems' className='posts-list-post-title'>
              数据结构 - 堆的原理 和 常见算法问题
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/03</span>
            </span>
            <a href='/post/algorithm-inplace-operations-on-array' className='posts-list-post-title'>
              几个数组上的原地操作问题 - 分拣的思路
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/03</span>
            </span>
            <a href='/post/algorithm-longest-increasing-subsequence' className='posts-list-post-title'>
              最长递增子序列 - 动态规划方法及打印
            </a>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2021/03</span>
            </span>
            <a href='/post/algorithm-longest-palindromic-subsequence' className='posts-list-post-title'>
              最长回文子序列问题（两种方法）
            </a>
          </li>
          <li>
            <a href='/posts' className='posts-list-more'>
              更多文章……
            </a>
          </li>
        </ul>

        <ClearBoth />
      </div>
    </>
  );
}
