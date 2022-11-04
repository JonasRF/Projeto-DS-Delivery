package com.devSuperior.dsDeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devSuperior.dsDeliver.DTO.OrderDTO;
import com.devSuperior.dsDeliver.DTO.ProductDTO;
import com.devSuperior.dsDeliver.entities.Order;
import com.devSuperior.dsDeliver.entities.OrderStatus;
import com.devSuperior.dsDeliver.entities.Product;
import com.devSuperior.dsDeliver.repositories.OrderRepository;
import com.devSuperior.dsDeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = orderRepository.findOrderWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(),
				OrderStatus.PENDING);
		for (ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getReferenceById(p.getId());
			order.getProducts().add(product);
		}
		order = orderRepository.save(order);
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
	Order order = orderRepository.getReferenceById(id);
	order.setStatus(OrderStatus.DELIVERED);
	order = orderRepository.save(order);
	return new OrderDTO(order);
	}
}
