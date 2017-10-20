import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { ItemListContainer } from './components';
import { InputArea, ItemList } from './components';

describe('ItemListContainer', () => {
  it('should render InputArea and ItemList', () => {
    const wrapper = shallow(<ItemListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <ItemList/>
    ])).to.equal(true);
  });

  it('should start with an empty list', () => {
    const wrapper = shallow(<ItemListContainer/>);
    expect(wrapper.state('items')).to.eql([]);
  });

  it('adds items to the list', () => {
    const wrapper = shallow(<ItemListContainer/>);
    wrapper.instance().addItem('Sam Adams');
    expect(wrapper.state('items')).to.eql(['Sam Adams']);
  });

  it('passes addItem to InputArea', () => {
    const wrapper = shallow(<ItemListContainer/>);
    const inputArea = wrapper.find(InputArea);
    const addItem = wrapper.instance().addItem;
    expect(inputArea.prop('onSubmit')).to.eql(addItem);
  });

  it('passes a bound addItem function to InputArea', () => {
    const wrapper = shallow(<ItemListContainer/>);
    const inputArea = wrapper.find(InputArea);
    inputArea.prop('onSubmit')('Sam Adams');
    expect(wrapper.state('items')).to.eql(['Sam Adams']);
  });

  it('renders the items', () => {
    const wrapper = mount(<ItemListContainer/>);
    wrapper.instance().addItem('Sam Adams');
    wrapper.instance().addItem('Resin');
    expect(wrapper.find('li').length).to.equal(2);
  });
});

describe('InputArea', () => {
  it('should contain an input and a button', () => {
    const wrapper = shallow(<InputArea/>);
    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <button>Add</button>
    ])).to.equal(true);
  });

  it('should accept input', () => {
    const wrapper = mount(<InputArea/>);
    const input = wrapper.find('input');
    input.simulate('change', {target: { value: 'Resin' }});
    expect(wrapper.state('text')).to.equal('Resin');
    expect(input.prop('value')).to.equal('Resin');
  });

  it('should call onSubmit when Add is clicked', () => {
    const addItemSpy = spy();
    const wrapper = shallow(<InputArea onSubmit={addItemSpy}/>);
    wrapper.setState({text: 'Octoberfest'});
    const addButton = wrapper.find('button');
    addButton.simulate('click');
    expect(addItemSpy.calledOnce).to.equal(true);
    expect(addItemSpy.calledWith('Octoberfest')).to.equal(true);
  });
});

describe('ItemList', () => {
  it('should render zero items', () => {
    const wrapper = shallow(<ItemList items={[]}/>);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render undefined items', () => {
    const wrapper = shallow(<ItemList items={undefined}/>);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render the items', () => {
    const items = ['Sam Adams', 'Resin', 'Octoberfest'];
    const wrapper = shallow(<ItemList items={items}/>);
    expect(wrapper.find('li')).to.have.length(3);
  });
});
