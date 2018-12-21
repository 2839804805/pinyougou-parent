package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageRresult;

import java.util.List;
import java.util.Map;

/**
 * 品牌接口
 */
public interface BrandService {
    /**
     * 查询全部数据
     * @return
     */
    public List<TbBrand> findAll();

    /**
     * 返回分页列表
     * @return
     */
    public PageRresult findPage(int pageNum,int pageSize);
    /**
     * 增加数据
     */
    public void add(TbBrand tbBrand);

    /**
     * 单个查询
     */
    public TbBrand findOne(Long id);

    /**
     * 修改方法
     */
    public void update(TbBrand tbBrand);
    /**
     * 删除
     */
    public void delete(Long [] ids);
    /**
     * 查找返回分页
     */
    public PageRresult findPage(TbBrand tbBrand,int pageNum,int pageSize);

    public List<Map> selectOption();
}
